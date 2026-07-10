export const cardinalData = {
  "generatedAt": "2026-07-10T18:52:53.624Z",
  "classId": 4256,
  "classSlug": "cardinal",
  "className": "Cardinal",
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
    "noteCount": 45,
    "addedSkills": 1,
    "versions": 5
  },
  "tree": {
    "columns": 7,
    "rows": 5,
    "skillTreeUrl": "https://www.divine-pride.net/tools/skilltree/4256",
    "jobIconUrl": "assets/divine-pride/jobs/4256.png"
  },
  "sources": {
    "rebalances": [
      "rebalances/cardinal/rebalance_1.md",
      "rebalances/cardinal/rebalance_2.md",
      "rebalances/cardinal/rebalance_3.md",
      "rebalances/cardinal/rebalance_4.md",
      "rebalances/cardinal/rebalance_5.md"
    ],
    "rebalanceManifest": "rebalances/manifest.json",
    "divinePrideApiDocs": "https://www.divine-pride.net/api",
    "divinePrideSkillTree": "https://www.divine-pride.net/tools/skilltree/4256",
    "browiki": "https://browiki.org",
    "irowiki": "https://irowiki.org/wiki/"
  },
  "rebalanceVersions": [
    {
      "id": "rebalance-1",
      "label": "Rebalance 1",
      "file": "rebalances/cardinal/rebalance_1.md",
      "heading": "9. Cardinal",
      "className": "Cardinal",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=9805",
      "scope": "main",
      "appliesTo": "Main classes only",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "9.1",
          "name": "Petitio",
          "notes": [
            "Reduces cooldown from 2 seconds to 1 second based on level 10.",
            "Applies critical damage, the critical chance is the user's Cri."
          ]
        },
        {
          "section": "9.2",
          "name": "Framen",
          "notes": [
            "Reduces cooldown from 3 seconds to 0.3 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
            "Reduces AP recovery rate from 3 to 1."
          ]
        },
        {
          "section": "9.3",
          "name": "Arbitrium",
          "notes": [
            "Reduces cooldown from 3 seconds to 2 seconds based on level 5.",
            "Increases damage (includes Fidus Animus level 10 bonus) from 2500%Matk to 5000%Matk based on level 10.",
            "Increases damage of the secondary attack from 1900%Matk to 6500%Matk based on level 10."
          ]
        }
      ]
    },
    {
      "id": "rebalance-2",
      "label": "Rebalance 2",
      "file": "rebalances/cardinal/rebalance_2.md",
      "heading": "9. Cardinal",
      "className": "Cardinal",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=11126",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "9.1",
          "name": "Framen",
          "notes": [
            "Increases SP consumption from 60 to 92 based on level 5.",
            "Increases AP recovery rate from 1 to 2.",
            "Increases damage from 2750%/3500%(demon and undead race)Matk to 4250%/4750%(demon and undead race)Matk based on level 5 (Fidus Animus level 10)."
          ]
        },
        {
          "section": "9.2",
          "name": "Arbitrium",
          "notes": [
            "Reduces cooldown from 2 seconds to 1.5 seconds.",
            "Reduces SP consumption from 140 to 112 based on level 10.",
            "Increases damage from 5000%/6500%(area damage)Matk to 11000%/13500%(area damage)Matk based on level 10."
          ]
        },
        {
          "section": "9.3",
          "name": "Petitio",
          "notes": [
            "Reduces cooldown from 1 second to 0.5 seconds.",
            "Increases SP consumption from 50 to 65 based on level 10.",
            "Increases AP recovery rate from 2 to 3.",
            "Increases damage from 3200%Atk to 11500%Atk based on level 10 (Mace & Book Mastery Level 10)."
          ]
        },
        {
          "section": "9.4",
          "name": "Competentia",
          "notes": [
            "Reduces AP consumption from 200 to 160 based on level 5.",
            "Increases duration from 240 seconds to 300 seconds based on level 5."
          ]
        },
        {
          "section": "9.5",
          "name": "Pneumaticus Procella",
          "notes": [
            "Reduces cooldown from 60 seconds to 5 seconds.",
            "Removes 1.5 seconds delay after skill.",
            "Reduces AP consumption from 150 to 30.",
            "Increases damage from 2030%/3050%(demon and undead race)Matk to 21180%/22750%(demon and undead race)Matk per hit based on level 10 (Fidus Animus level 10)."
          ]
        },
        {
          "section": "9.6",
          "name": "Effligo",
          "notes": [
            "Reduces cooldown from 60 seconds to 0.5 seconds.",
            "Removes 1 seconds delay after skill.",
            "Increases SP consumption from 60 to 75.",
            "Reduces AP consumption from 100 to 12.",
            "Increases damage from 8080%/12150%(demon and undead race)Atk to 16580%/18150%(demon and undead race)Atk based on level 10 (Mace & Book Mastery Level 10).",
            "Reduces factor weight of POW in skill formula from 10/10(demon and undead race) to 7/7(demon and undead race)."
          ]
        }
      ]
    },
    {
      "id": "rebalance-3",
      "label": "Rebalance 3",
      "file": "rebalances/cardinal/rebalance_3.md",
      "heading": "5. Cardinal",
      "className": "Cardinal",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=12421",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "5.1",
          "name": "Framen",
          "notes": [
            "Increases base damage from 4000%/4500%Matk to 4750%/5250%Matk based on level 5."
          ]
        },
        {
          "section": "5.2",
          "name": "Arbitrium",
          "notes": [
            "Reduces skill cooldown from 1.5 seconds to 1 second.",
            "Increases SP consumption from 112 to 125 based on level 10.",
            "Applies AP recovery rate by 2.",
            "Increases base damage of area damage from 12500%Matk to 17500%Matk based on level 10.",
            "Increases factor weight of Fidus Animus skill level in skill formula of area damage from 100 to 500 based on level 10.",
            "Increases factor weight of SPL in skill formula from 7 to 10."
          ]
        },
        {
          "section": "5.3",
          "name": "Petitio",
          "notes": [
            "Reduces area of effect from 9 x 9 cells to 7 x 7 cells based on level 10.",
            "Increases factor weight of Mace & Book Mastery skill level in skill formula from 100 to 500 based on level 10."
          ]
        }
      ]
    },
    {
      "id": "rebalance-4",
      "label": "Rebalance 4",
      "file": "rebalances/cardinal/rebalance_4.md",
      "heading": "5. Cardinal",
      "className": "Cardinal",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=13917",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "5.1",
          "name": "Framen",
          "notes": [
            "Increases base damage from 4750+(Fidus Animus skill level x 25)%/5250+(Fidus Animus skill level x 25)%(demon and undead)Matk to 6500+(Fidus Animus skill level x 25)%/6750+(Fidus Animus skill level x 25)%(demon and undead)Matk based on level 5."
          ]
        },
        {
          "section": "5.2",
          "name": "Pneumaticus Procella",
          "notes": [
            "Reduces AP consumption from 30 to 20.",
            "Changes damage property from holy to neutral.",
            "Addes global cooldown by 0.5 seconds.",
            "Changes sound effect."
          ]
        }
      ]
    },
    {
      "id": "rebalance-5",
      "label": "Rebalance 5",
      "file": "rebalances/cardinal/rebalance_5.md",
      "heading": "6. Cardinal",
      "className": "Cardinal",
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
      "file": "rebalances/cardinal/added_skills.md",
      "skills": [
        "Divinus Flos"
      ]
    }
  ],
  "skillTabs": [
    {
      "id": "current",
      "label": "Cardinal",
      "pointLimit": 59,
      "tree": {
        "columns": 7,
        "rows": 5
      },
      "skills": [
        {
          "id": 5280,
          "imageFile": "5280.png",
          "name": "Dilectio Heal",
          "maxLevel": 5,
          "prerequisiteText": "Coluseo Heal Lv. 3 and High Heal Lv. 3",
          "group": "Active",
          "type": "Healing",
          "target": "You and Your Party",
          "recoversAp": "1",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Dilectio_Heal",
          "description": "Restore HP for you and one or more surrounding party members.",
          "levelDetails": [],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.3 seconds",
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
            }
          ],
          "spCost": "45 + (5 × Skill Level)",
          "areaOfEffect": "3 x 3~7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5280.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5280",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 2043,
                "level": 3,
                "name": "Coluseo Heal",
                "visible": false
              },
              {
                "id": 2051,
                "level": 3,
                "name": "High Heal",
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
                "label": "SP Cost",
                "value": "45 + (5 × Skill Level)"
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
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.3 seconds"
              },
              {
                "label": "Target",
                "value": "You and Your Party"
              },
              {
                "label": "Area of Effect",
                "value": "3 x 3~7 x 7"
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
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "55"
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
                      "sp-cost": "65"
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
          "id": 5276,
          "imageFile": "5276.png",
          "name": "Fidus Animus",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Fidus_Animus",
          "description": "Increase your Holy Magic damage.\nThis skill also affects Flamen, Arbitrium, and Pneumaticus Procella damage.",
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
          "translations": {
            "pt-BR": {
              "name": " Fidus Animus ",
              "description": "Eleva a fé da sua alma.\nAumenta o dano mágico da propriedade Sagrado .",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Fidus_Animus"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5276.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5276",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5270,
          "imageFile": "5270.png",
          "name": "Mace Book Mastery",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Maces and Books increase Physical damage on enemies, depending on their size.\nThis skill also affects Petitio and Effligo damage.",
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
          "iconUrl": "assets/divine-pride/skills/5270.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5270",
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
          "id": 5269,
          "imageFile": "5269.png",
          "name": "Mediale Votum",
          "maxLevel": 5,
          "prerequisiteText": "Dilectio Heal Lv. 3",
          "group": "Active",
          "type": "Healing",
          "target": "You and Your Party",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Mediale_Votum",
          "description": "Bless 1 party member.\nThis skill restores HP for its target and surrounding party members in 9 x9 cells every 2 seconds, by a portion of the target's HP.",
          "levelDetails": [],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "2 seconds",
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
          "spCost": "20 + (10 × Skill Level)",
          "duration": "20 + (20 × Skill Level) seconds",
          "castRange": "9 cells",
          "areaOfEffect": "9 x 9",
          "translations": {
            "pt-BR": {
              "name": " Mediale Votum ",
              "description": "Abençoa um personagem, podendo ser você ou um membro do grupo .\nA cada 2 segundos, eles terão seu HP regenerado de acordo com o HP máximo.\nMembros do grupo que estiverem ao redor do personagem afetado receberão a cura.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Mediale_Votum"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5269.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5269",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5280,
                "level": 3,
                "name": "Dilectio Heal",
                "visible": true
              }
            ]
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
                "value": "20 + (10 × Skill Level)"
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
                "value": "0 seconds"
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
                "value": "You and Your Party"
              },
              {
                "label": "Area of Effect",
                "value": "9 x 9"
              },
              {
                "label": "Duration",
                "value": "20 + (20 × Skill Level) seconds"
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5282,
          "imageFile": "5282.png",
          "name": "Benedictum",
          "maxLevel": 5,
          "prerequisiteText": "Canto Candidus Lv. 3 and Dilectio Heal Lv. 2",
          "group": "Active",
          "type": "Buff",
          "target": "1 Target",
          "recoversAp": "1",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Benedictum",
          "description": "Bless a target, temporarily increasing their POW, CRT, and CON.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "0 seconds",
          "castDelay": "0.7 seconds",
          "cooldown": "0.25 seconds",
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
          "spCost": "65 + (5 × Skill Level)",
          "duration": "90 + (30 × Skill Level) seconds",
          "castRange": "9 cells",
          "translations": {
            "pt-BR": {
              "name": " Benedictum ",
              "description": "Reza para o alvo, fortalecendo sua fé.\nAumenta POD , CRV e CON temporariamente.\nA cada 100 pontos de C.Mais , os bônus aumentam +2.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Benedictum"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5282.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5282",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2042,
                "level": 3,
                "name": "Cantocandidus",
                "visible": false
              },
              {
                "id": 5280,
                "level": 2,
                "name": "Dilectio Heal",
                "visible": true
              }
            ]
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
                "value": "65 + (5 × Skill Level)"
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
                "value": "0.7 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.25 seconds"
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
                "label": "Duration",
                "value": "90 + (30 × Skill Level) seconds"
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
                      "sp-cost": "70"
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
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "85"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5281,
          "imageFile": "5281.png",
          "name": "Religio",
          "maxLevel": 5,
          "prerequisiteText": "Clementia Lv. 3 and Dilectio Heal Lv. 2",
          "group": "Active",
          "type": "Buff",
          "target": "1 Target",
          "recoversAp": "1",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Religio",
          "description": "Maximize the target's faith, temporarily increasing their SPL, WIS, and STA.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "0 seconds",
          "castDelay": "0.7 seconds",
          "cooldown": "0.25 seconds",
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
          "spCost": "65 + (5 × Skill Level)",
          "duration": "90 + (30 × Skill Level) seconds",
          "castRange": "9 cells",
          "translations": {
            "pt-BR": {
              "name": " Religio ",
              "description": "Reza para o alvo, fortalecendo sua fé.\nAumenta FEI , SAB e STA temporariamente.\nA cada 100 pontos de C.Mais , os bônus aumentam +2.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Religio"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5281.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5281",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2041,
                "level": 3,
                "name": "Clementia",
                "visible": false
              },
              {
                "id": 5280,
                "level": 2,
                "name": "Dilectio Heal",
                "visible": true
              }
            ]
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
                "value": "65 + (5 × Skill Level)"
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
                "value": "0.7 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.25 seconds"
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
                "label": "Duration",
                "value": "90 + (30 × Skill Level) seconds"
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
                      "sp-cost": "70"
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
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "85"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5284,
          "imageFile": "5284.png",
          "name": "Framen",
          "maxLevel": 5,
          "prerequisiteText": "Judex 10, Fidus Animus 5",
          "group": "Active",
          "type": "Magic",
          "target": "Single Target",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Framen",
          "description": "Inflict Holy magical damage to the target and surrounding enemies.\nDamage is increased if target is Demon or Undead race.\nDamage is additionally increased depending on the user's base level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 950+(Fidus Animus Lv x5)%\n/ 1050+(Fidus Animus Lv x5)% (Demon,Undead) / Range: 5x5 Cells"
            },
            {
              "level": 2,
              "text": "MATK 1900+(Fidus Animus Lv x10)%\n/ 2100+(Fidus Animus Lv x10)% (Demon,Undead) / Range: 5x5 Cells"
            },
            {
              "level": 3,
              "text": "MATK 2850+(Fidus Animus Lv x15)%\n/ 3150+(Fidus Animus Lv x15)% (Demon,Undead) / Range: 5x5 Cells"
            },
            {
              "level": 4,
              "text": "MATK 3800+(Fidus Animus Lv x20)%\n/ 4200+(Fidus Animus Lv x20)% (Demon,Undead) / Range: 7x7 Cells"
            },
            {
              "level": 5,
              "text": "MATK 4750+(Fidus Animus Lv x25)%\n/ 5250+(Fidus Animus Lv x25)% (Demon,Undead) / Range: 7x7 Cells"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "5 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.3 seconds",
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
                  "value": "83"
                },
                {
                  "level": 3,
                  "value": "86"
                },
                {
                  "level": 4,
                  "value": "89"
                },
                {
                  "level": 5,
                  "value": "92"
                }
              ]
            }
          ],
          "spCost": "35 + (5 x Skill Level)",
          "castRange": "Magic",
          "areaOfEffect": "5 x 5 ~ 7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5284.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5284",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2038,
                "level": 10,
                "name": "Judex",
                "visible": false
              },
              {
                "id": 5276,
                "level": 5,
                "name": "Fidus Animus",
                "visible": true
              }
            ]
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
                "value": "35 + (5 x Skill Level)"
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
                "value": "0.3 seconds"
              },
              {
                "label": "Cast Range",
                "value": "Magic"
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
                      "area-of-effect": "5x5",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "83"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "86"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "89"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "92"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Framen",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/cardinal/rebalance_1.md",
              "section": "9.2",
              "notes": [
                "Reduces cooldown from 3 seconds to 0.3 seconds based on level 5.",
                "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
                "Reduces AP recovery rate from 3 to 1."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "3 seconds",
                  "after": "0.3 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 3 seconds to 0.3 seconds based on level 5."
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
                  "before": "3",
                  "after": "1",
                  "scope": "",
                  "source": "Reduces AP recovery rate from 3 to 1."
                }
              ]
            },
            {
              "skillName": "Framen",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/cardinal/rebalance_2.md",
              "section": "9.1",
              "notes": [
                "Increases SP consumption from 60 to 92 based on level 5.",
                "Increases AP recovery rate from 1 to 2.",
                "Increases damage from 2750%/3500%(demon and undead race)Matk to 4250%/4750%(demon and undead race)Matk based on level 5 (Fidus Animus level 10)."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "60",
                  "after": "92",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 60 to 92 based on level 5."
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
                  "before": "2750%/3500%(demon and undead race)Matk",
                  "after": "4250%/4750%(demon and undead race)Matk",
                  "scope": "Lv 5 (Fidus Animus level 10)",
                  "source": "Increases damage from 2750%/3500%(demon and undead race)Matk to 4250%/4750%(demon and undead race)Matk based on level 5 (Fidus Animus level 10)."
                }
              ]
            },
            {
              "skillName": "Framen",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/cardinal/rebalance_3.md",
              "section": "5.1",
              "notes": [
                "Increases base damage from 4000%/4500%Matk to 4750%/5250%Matk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "4000%/4500%Matk",
                  "after": "4750%/5250%Matk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 4000%/4500%Matk to 4750%/5250%Matk based on level 5."
                }
              ]
            },
            {
              "skillName": "Framen",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/cardinal/rebalance_4.md",
              "section": "5.1",
              "notes": [
                "Increases base damage from 4750+(Fidus Animus skill level x 25)%/5250+(Fidus Animus skill level x 25)%(demon and undead)Matk to 6500+(Fidus Animus skill level x 25)%/6750+(Fidus Animus skill level x 25)%(demon and undead)Matk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "4750+(Fidus Animus skill level x 25)%/5250+(Fidus Animus skill level x 25)%(demon and undead)Matk",
                  "after": "6500+(Fidus Animus skill level x 25)%/6750+(Fidus Animus skill level x 25)%(demon and undead)Matk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 4750+(Fidus Animus skill level x 25)%/5250+(Fidus Animus skill level x 25)%(demon and undead)Matk to 6500+(Fidus Animus skill level x 25)%/6750+(Fidus Animus skill level x 25)%(demon and undead)Matk based on level 5."
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
          "id": 5283,
          "imageFile": "5283.png",
          "name": "Petitio",
          "maxLevel": 10,
          "prerequisiteText": "Duple Light 10, Mace & Book Mastery 5",
          "group": "Active",
          "type": "Melee/Ranged Physical",
          "target": "Single Target",
          "recoversAp": "3",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Petitio",
          "description": "Mace and book only skill.\nDeals physical damage to the target and surrounding enemies around the target.\nIf using mace, damage type is long ranged physical damage. If using book, damage type is melee physical damage.\nDamage is additionally increased depending on the user's base level and POW.\nIn addition, Critical Damage is applied at the user's Critical Chance.\nHowever, In the case of critical damage, half of the total critical damage increase options are applied.\nWhen Duple Light is active, has a chance to auto-cast Petitio when dealing normal physical damage.\nMaximum level of Petitio that the user learned will be auto-cast and the skill won't recover AP from auto-casting.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 1050+(Mace & Book Mastery level x50)%\nArea of Effect : 3x3 Cells"
            },
            {
              "level": 2,
              "text": "ATK 2100+(Mace & Book Mastery level x100)%\nArea of Effect : 3x3 Cells"
            },
            {
              "level": 3,
              "text": "ATK 3150+(Mace & Book Mastery level x150)%\nArea of Effect : 3x3 Cells"
            },
            {
              "level": 4,
              "text": "ATK 4200+(Mace & Book Mastery level x200)%\nArea of Effect : 3x3 Cells"
            },
            {
              "level": 5,
              "text": "ATK 5250+(Mace & Book Mastery level x250)%\nArea of Effect : 5x5 Cells"
            },
            {
              "level": 6,
              "text": "ATK 6300+(Mace & Book Mastery level x300)%\nArea of Effect : 5x5 Cells"
            },
            {
              "level": 7,
              "text": "ATK 7350+(Mace & Book Mastery level x350)%\nArea of Effect : 5x5 Cells"
            },
            {
              "level": 8,
              "text": "ATK 8400+(Mace & Book Mastery level x400)%\nArea of Effect : 5x5 Cells"
            },
            {
              "level": 9,
              "text": "ATK 9450+(Mace & Book Mastery level x450)%\nArea of Effect : 7x7 Cells"
            },
            {
              "level": 10,
              "text": "ATK 10500+(Mace & Book Mastery level x500)%\nArea of Effect : 7x7 Cells"
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
                  "value": "38"
                },
                {
                  "level": 2,
                  "value": "41"
                },
                {
                  "level": 3,
                  "value": "44"
                },
                {
                  "level": 4,
                  "value": "47"
                },
                {
                  "level": 5,
                  "value": "50"
                },
                {
                  "level": 6,
                  "value": "53"
                },
                {
                  "level": 7,
                  "value": "56"
                },
                {
                  "level": 8,
                  "value": "59"
                },
                {
                  "level": 9,
                  "value": "62"
                },
                {
                  "level": 10,
                  "value": "65"
                }
              ]
            }
          ],
          "spCost": "28 + (2 x Skill Level)",
          "castRange": "2 cells",
          "areaOfEffect": "3 x 3~9 x 9",
          "translations": {
            "pt-BR": {
              "name": " Petitio ",
              "description": "Derruba o martelo do julgamento divino.\nAtinge um alvo, afetando oponentes na área ao redor.\nO dano infligido depende da arma equipada:",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Petitio"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5283.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5283",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 2054,
                "level": 10,
                "name": "Duple Light",
                "visible": false
              },
              {
                "id": 5270,
                "level": 5,
                "name": "Mace Book Mastery",
                "visible": true
              }
            ]
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
                "value": "28 + (2 x Skill Level)"
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
                "value": "2 cells"
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
                      "sp-cost": "38"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "sp-cost": "41"
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
                      "sp-cost": "47"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "53"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "56"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "59"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "62"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "7x7",
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
              "skillName": "Petitio",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/cardinal/rebalance_1.md",
              "section": "9.1",
              "notes": [
                "Reduces cooldown from 2 seconds to 1 second based on level 10.",
                "Applies critical damage, the critical chance is the user's Cri."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "2 seconds",
                  "after": "1 second",
                  "scope": "Lv 10",
                  "source": "Reduces cooldown from 2 seconds to 1 second based on level 10."
                }
              ]
            },
            {
              "skillName": "Petitio",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/cardinal/rebalance_2.md",
              "section": "9.3",
              "notes": [
                "Reduces cooldown from 1 second to 0.5 seconds.",
                "Increases SP consumption from 50 to 65 based on level 10.",
                "Increases AP recovery rate from 2 to 3.",
                "Increases damage from 3200%Atk to 11500%Atk based on level 10 (Mace & Book Mastery Level 10)."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 1 second to 0.5 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "50",
                  "after": "65",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 50 to 65 based on level 10."
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
                  "before": "3200%Atk",
                  "after": "11500%Atk",
                  "scope": "Lv 10 (Mace & Book Mastery Level 10)",
                  "source": "Increases damage from 3200%Atk to 11500%Atk based on level 10 (Mace & Book Mastery Level 10)."
                }
              ]
            },
            {
              "skillName": "Petitio",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/cardinal/rebalance_3.md",
              "section": "5.3",
              "notes": [
                "Reduces area of effect from 9 x 9 cells to 7 x 7 cells based on level 10.",
                "Increases factor weight of Mace & Book Mastery skill level in skill formula from 100 to 500 based on level 10."
              ],
              "specRows": [
                {
                  "label": "Area of Effect",
                  "before": "9 x 9 cells",
                  "after": "7 x 7 cells",
                  "scope": "Lv 10",
                  "source": "Reduces area of effect from 9 x 9 cells to 7 x 7 cells based on level 10."
                },
                {
                  "label": "Factor Weight Of Mace & Book Mastery Skill Level In Skill Formula",
                  "before": "100",
                  "after": "500",
                  "scope": "Lv 10",
                  "source": "Increases factor weight of Mace & Book Mastery skill level in skill formula from 100 to 500 based on level 10."
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
          "id": 5268,
          "imageFile": "5268.png",
          "name": "Repatatio",
          "maxLevel": 5,
          "prerequisiteText": "Mediale Votum Lv. 3",
          "group": "Active",
          "type": "Healing",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Repatatio",
          "description": "Fully restore the target's HP.\nCan't be used on monsters, Mercenaries, Spirits, or Humunculi.",
          "levelDetails": [],
          "fixedCastTime": "2 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
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
                  "value": "120"
                },
                {
                  "level": 3,
                  "value": "120"
                },
                {
                  "level": 4,
                  "value": "120"
                },
                {
                  "level": 5,
                  "value": "120"
                }
              ]
            }
          ],
          "spCost": "120",
          "cooldown": "150~10 seconds",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5268.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5268",
          "tree": {
            "idx": 15,
            "row": 2,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5269,
                "level": 3,
                "name": "Mediale Votum",
                "visible": true
              }
            ]
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
                "value": "120"
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
                "value": "150~10 seconds"
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
                      "sp-cost": "120"
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
                      "sp-cost": "120"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "120"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "120"
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
          "id": 5273,
          "imageFile": "5273.png",
          "name": "Arbitrium",
          "maxLevel": 10,
          "prerequisiteText": "Adoramus 5, Framen 3",
          "group": "Active",
          "type": "Magic",
          "target": "Single Target",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Arbitrium",
          "description": "Calls the light judgement to deals primary holy property magical damage to the target, with a chance to inflict [Ailment: Quiet].\nThen the light explodes on the target, deals secondary holy property magical damage to surrounding enemies within 9 x 9 cells around the target.\nDamage is additionally increased depending on the user's base level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1000+(Fidus Animus Lv x10)%(1st)\n/ 1750+(Fidus Animus Lv x50)%(2nd)/Quiet inflicting chance: 25%"
            },
            {
              "level": 2,
              "text": "MATK 2000+(Fidus Animus Lv x20)%(1st)\n/ 3500+(Fidus Animus Lv x100)%(2nd)/Quiet inflicting chance: 30%"
            },
            {
              "level": 3,
              "text": "MATK 3000+(Fidus Animus Lv x30)%(1st)\n/ 5250+(Fidus Animus Lv x150)%(2nd)/Quiet inflicting chance: 35%"
            },
            {
              "level": 4,
              "text": "MATK 4000+(Fidus Animus Lv x40)%(1st)\n/ 7000+(Fidus Animus Lv x200)%(2nd)/Quiet inflicting chance: 40%"
            },
            {
              "level": 5,
              "text": "MATK 5000+(Fidus Animus Lv x50)%(1st)\n/ 8750+(Fidus Animus Lv x250)%(2nd)/Quiet inflicting chance: 45%"
            },
            {
              "level": 6,
              "text": "MATK 6000+(Fidus Animus Lv x60)%(1st)\n/ 10500+(Fidus Animus Lv x300)%(2nd)/Quiet inflicting chance: 50%"
            },
            {
              "level": 7,
              "text": "MATK 7000+(Fidus Animus Lv x70)%(1st)\n/ 12250+(Fidus Animus Lv x350)%(2nd)/Quiet inflicting chance: 55%"
            },
            {
              "level": 8,
              "text": "MATK 8000+(Fidus Animus Lv x80)%(1st)\n/ 14000+(Fidus Animus Lv x400)%(2nd)/Quiet inflicting chance: 60%"
            },
            {
              "level": 9,
              "text": "MATK 9000+(Fidus Animus Lv x90)%(1st)\n/ 15750+(Fidus Animus Lv x450)%(2nd)/Quiet inflicting chance: 65%"
            },
            {
              "level": 10,
              "text": "MATK 10000+(Fidus Animus Lv x100)%(1st)\n/ 17500+(Fidus Animus Lv x500)%(2nd)/Quiet inflicting chance: 70%"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "4 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.75 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "107"
                },
                {
                  "level": 2,
                  "value": "109"
                },
                {
                  "level": 3,
                  "value": "111"
                },
                {
                  "level": 4,
                  "value": "113"
                },
                {
                  "level": 5,
                  "value": "115"
                },
                {
                  "level": 6,
                  "value": "117"
                },
                {
                  "level": 7,
                  "value": "119"
                },
                {
                  "level": 8,
                  "value": "121"
                },
                {
                  "level": 9,
                  "value": "123"
                },
                {
                  "level": 10,
                  "value": "125"
                }
              ]
            }
          ],
          "spCost": "40 + (10 × Skill Level)",
          "castRange": "Magic",
          "areaOfEffect": "9×9",
          "translations": {
            "pt-BR": {
              "name": " Arbitrium ",
              "description": "Libera a luz do livre arbítrio, que explodirá em um som ensurdecedor.\nA luz causa dano mágico de propriedade Sagrado em um alvo único.\nEsse ataque tem chance de infligir Quietude .",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Arbitrium"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5273.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5273",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2040,
                "level": 5,
                "name": "Adoramus",
                "visible": false
              },
              {
                "id": 5284,
                "level": 3,
                "name": "Flamen",
                "visible": true
              }
            ]
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
                "value": "40 + (10 × Skill Level)"
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
                "value": "0.75 seconds"
              },
              {
                "label": "Cast Range",
                "value": "Magic"
              },
              {
                "label": "Target",
                "value": "Single Target"
              },
              {
                "label": "Area of Effect",
                "value": "9×9"
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
                      "sp-cost": "107"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "109"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "111"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "113"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "115"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "117"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "119"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "121"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "123"
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
              "skillName": "Arbitrium",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/cardinal/rebalance_1.md",
              "section": "9.3",
              "notes": [
                "Reduces cooldown from 3 seconds to 2 seconds based on level 5.",
                "Increases damage (includes Fidus Animus level 10 bonus) from 2500%Matk to 5000%Matk based on level 10.",
                "Increases damage of the secondary attack from 1900%Matk to 6500%Matk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "3 seconds",
                  "after": "2 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 3 seconds to 2 seconds based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "2500%Matk (includes Fidus Animus level 10 bonus)/1900%Matk (secondary attack)",
                  "after": "5000%Matk (includes Fidus Animus level 10 bonus)/6500%Matk (secondary attack)",
                  "scope": "Lv 10",
                  "source": "Increases damage (includes Fidus Animus level 10 bonus) from 2500%Matk to 5000%Matk based on level 10. / Increases damage of the secondary attack from 1900%Matk to 6500%Matk based on level 10."
                }
              ]
            },
            {
              "skillName": "Arbitrium",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/cardinal/rebalance_2.md",
              "section": "9.2",
              "notes": [
                "Reduces cooldown from 2 seconds to 1.5 seconds.",
                "Reduces SP consumption from 140 to 112 based on level 10.",
                "Increases damage from 5000%/6500%(area damage)Matk to 11000%/13500%(area damage)Matk based on level 10."
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
                  "before": "140",
                  "after": "112",
                  "scope": "Lv 10",
                  "source": "Reduces SP consumption from 140 to 112 based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "5000%/6500%(area damage)Matk",
                  "after": "11000%/13500%(area damage)Matk",
                  "scope": "Lv 10",
                  "source": "Increases damage from 5000%/6500%(area damage)Matk to 11000%/13500%(area damage)Matk based on level 10."
                }
              ]
            },
            {
              "skillName": "Arbitrium",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/cardinal/rebalance_3.md",
              "section": "5.2",
              "notes": [
                "Reduces skill cooldown from 1.5 seconds to 1 second.",
                "Increases SP consumption from 112 to 125 based on level 10.",
                "Applies AP recovery rate by 2.",
                "Increases base damage of area damage from 12500%Matk to 17500%Matk based on level 10.",
                "Increases factor weight of Fidus Animus skill level in skill formula of area damage from 100 to 500 based on level 10.",
                "Increases factor weight of SPL in skill formula from 7 to 10."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "1.5 seconds",
                  "after": "1 second",
                  "scope": "",
                  "source": "Reduces skill cooldown from 1.5 seconds to 1 second."
                },
                {
                  "label": "SP Cost",
                  "before": "112",
                  "after": "125",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 112 to 125 based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "12500%Matk (area damage)",
                  "after": "17500%Matk (area damage)",
                  "scope": "Lv 10",
                  "source": "Increases base damage of area damage from 12500%Matk to 17500%Matk based on level 10."
                },
                {
                  "label": "Factor Weight Of Fidus Animus Skill Level In Skill Formula Of Area Damage",
                  "before": "100",
                  "after": "500",
                  "scope": "Lv 10",
                  "source": "Increases factor weight of Fidus Animus skill level in skill formula of area damage from 100 to 500 based on level 10."
                },
                {
                  "label": "Factor Weight Of Spl In Skill Formula",
                  "before": "7",
                  "after": "10",
                  "scope": "",
                  "source": "Increases factor weight of SPL in skill formula from 7 to 10."
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
          "id": 6518,
          "imageFile": "6518.png",
          "name": "Divinus Flos",
          "maxLevel": 5,
          "prerequisiteText": "Adoramus level 5, Framen level 5",
          "group": "Active",
          "type": "Magic",
          "target": "Single target",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Blooms a sacred flower that inflicts holy property magical damage to the target and surrounding enemies within 7 x 7 cells around the target.\nIf the user is under Ancilla buff, change the skill property to neutral.\nDeals additional damage depends on user's base level, SPL and level of Fidus Animus user learned.",
          "levelDetails": [
            {
              "level": 1,
              "text": "(4000 + (Fidus Animus level x 70))% Matk."
            },
            {
              "level": 2,
              "text": "(8000 + (Fidus Animus level x 70))% Matk."
            },
            {
              "level": 3,
              "text": "(12000 + (Fidus Animus level x 70))% Matk."
            },
            {
              "level": 4,
              "text": "(16000 + (Fidus Animus level x 70))% Matk."
            },
            {
              "level": 5,
              "text": "(20000 + (Fidus Animus level x 70))% Matk."
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "0.85 seconds",
          "cooldown": "0.7 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6518.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6518",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2040,
                "level": 5,
                "name": "Adoramus",
                "visible": false
              },
              {
                "id": 5284,
                "level": 5,
                "name": "Flamen",
                "visible": true
              }
            ]
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
                "value": "2 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.85 seconds"
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
                "value": "holy property magical damage"
              }
            ],
            "levelTables": []
          },
          "balanceNotes": [
            {
              "skillName": "Divinus Flos",
              "versionId": "rebalance-5",
              "versionLabel": "Rebalance 5",
              "file": "rebalances/cardinal/added_skills.md",
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
          "id": 5277,
          "imageFile": "5277.png",
          "name": "Effligo(Effligo)",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Melee Physics",
          "target": "Single Target",
          "recoversAp": "",
          "consumesAp": "12",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Blunt and book-only skills.\nDeals powerful Melee Physics damage to the target.\nDeals even more damage if the target is a demon/undead monster.\nDamage increases additionally based on the caster's base level and POW.\nCritical damage is applied based on the caster's critical probability.\nIn case of critical damage, half of the total critical damage increase options is applied.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 1650%/ 1800% (Demon, Undead)"
            },
            {
              "level": 2,
              "text": "ATK 3300%/ 3600% (Demon, Undead)"
            },
            {
              "level": 3,
              "text": "ATK 4950%/ 5400% (Demon, Undead)"
            },
            {
              "level": 4,
              "text": "ATK 6600%/ 7200% (Demon, Undead)"
            },
            {
              "level": 5,
              "text": "ATK 8250%/ 9000% (Demon, Undead)"
            },
            {
              "level": 6,
              "text": "ATK 9900%/ 10800% (Demon, Undead)"
            },
            {
              "level": 7,
              "text": "ATK 11550%/ 12600% (Demon, Undead)"
            },
            {
              "level": 8,
              "text": "ATK 13200%/ 14400% (Demon, Undead)"
            },
            {
              "level": 9,
              "text": "ATK 14850%/ 16200% (Demon, Undead)"
            },
            {
              "level": 10,
              "text": "ATK 16500%/ 18000% (Demon, Undead)"
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
          "iconUrl": "assets/divine-pride/skills/5277.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5277",
          "tree": {
            "idx": 20,
            "row": 2,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 2046,
                "level": 5,
                "name": "Oratio",
                "visible": false
              },
              {
                "id": 5283,
                "level": 10,
                "name": "Petitio",
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
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "75"
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
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "75"
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
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
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
              "skillName": "Effligo",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/cardinal/rebalance_2.md",
              "section": "9.6",
              "notes": [
                "Reduces cooldown from 60 seconds to 0.5 seconds.",
                "Removes 1 seconds delay after skill.",
                "Increases SP consumption from 60 to 75.",
                "Reduces AP consumption from 100 to 12.",
                "Increases damage from 8080%/12150%(demon and undead race)Atk to 16580%/18150%(demon and undead race)Atk based on level 10 (Mace & Book Mastery Level 10).",
                "Reduces factor weight of POW in skill formula from 10/10(demon and undead race) to 7/7(demon and undead race)."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "60 seconds",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 60 seconds to 0.5 seconds."
                },
                {
                  "label": "Cast Delay",
                  "before": "1 seconds delay",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes 1 seconds delay after skill."
                },
                {
                  "label": "SP Cost",
                  "before": "60",
                  "after": "75",
                  "scope": "",
                  "source": "Increases SP consumption from 60 to 75."
                },
                {
                  "label": "AP Consumed",
                  "before": "100",
                  "after": "12",
                  "scope": "",
                  "source": "Reduces AP consumption from 100 to 12."
                },
                {
                  "label": "Damage",
                  "before": "8080%/12150%(demon and undead race)Atk",
                  "after": "16580%/18150%(demon and undead race)Atk",
                  "scope": "Lv 10 (Mace & Book Mastery Level 10)",
                  "source": "Increases damage from 8080%/12150%(demon and undead race)Atk to 16580%/18150%(demon and undead race)Atk based on level 10 (Mace & Book Mastery Level 10)."
                },
                {
                  "label": "Factor Weight Of Pow In Skill Formula",
                  "before": "10/10(demon and undead race)",
                  "after": "7/7(demon and undead race)",
                  "scope": "",
                  "source": "Reduces factor weight of POW in skill formula from 10/10(demon and undead race) to 7/7(demon and undead race)."
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
          "id": 5275,
          "imageFile": "5275.png",
          "name": "Presens Acies",
          "maxLevel": 5,
          "prerequisiteText": "Mediale Votum Lv. 3 and Repatatio Lv. 3",
          "group": "Active",
          "type": "Buff",
          "target": "You and party members",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Presens_Acies",
          "description": "Increase Critical damage rate for you or 1 party member.",
          "levelDetails": [],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "2 seconds",
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
                  "value": "45"
                },
                {
                  "level": 3,
                  "value": "60"
                },
                {
                  "level": 4,
                  "value": "75"
                },
                {
                  "level": 5,
                  "value": "90"
                }
              ]
            }
          ],
          "spCost": "15 + (15 × Skill Level)",
          "duration": "90 + (30 × Skill Level) seconds",
          "translations": {
            "pt-BR": {
              "name": " Presens Acies ",
              "description": "Abençoa você ou 1 membro do seu grupo .\nAumenta o T.CRIT temporariamente.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Presens_Acies"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5275.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5275",
          "tree": {
            "idx": 21,
            "row": 3,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 5268,
                "level": 3,
                "name": "Repatatio",
                "visible": true
              },
              {
                "id": 5269,
                "level": 3,
                "name": "Mediale Votum",
                "visible": true
              }
            ]
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
                "value": "15 + (15 × Skill Level)"
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
                "value": "0 seconds"
              },
              {
                "label": "Target",
                "value": "You and party members"
              },
              {
                "label": "Duration",
                "value": "90 + (30 × Skill Level) seconds"
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
                      "sp-cost": "45"
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
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5272,
          "imageFile": "5272.png",
          "name": "Argutus Telum",
          "maxLevel": 5,
          "prerequisiteText": "Mediale Votum Lv. 3 and Repatatio Lv. 3",
          "group": "Active",
          "type": "Buff",
          "target": "You and Your Party",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Argutus_Telum",
          "description": "Enable you and 1 party member to ignore Physical Resistance.",
          "levelDetails": [],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "2 seconds",
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
                  "value": "45"
                },
                {
                  "level": 3,
                  "value": "60"
                },
                {
                  "level": 4,
                  "value": "75"
                },
                {
                  "level": 5,
                  "value": "90"
                }
              ]
            }
          ],
          "spCost": "15 + (15 × Skill Level)",
          "duration": "90 + (30 × Skill Level) seconds",
          "translations": {
            "pt-BR": {
              "name": " Argutus Telum ",
              "description": "Abençoa você ou 1 membro do seu grupo para ignorar parte da TEN dos oponentes.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Argutus_Telum"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5272.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5272",
          "tree": {
            "idx": 22,
            "row": 3,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5268,
                "level": 3,
                "name": "Repatatio",
                "visible": true
              },
              {
                "id": 5269,
                "level": 3,
                "name": "Mediale Votum",
                "visible": true
              }
            ]
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
                "value": "15 + (15 × Skill Level)"
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
                "value": "0 seconds"
              },
              {
                "label": "Target",
                "value": "You and Your Party"
              },
              {
                "label": "Duration",
                "value": "90 + (30 × Skill Level) seconds"
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
                      "sp-cost": "45"
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
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5271,
          "imageFile": "5271.png",
          "name": "Argutus Vita",
          "maxLevel": 5,
          "prerequisiteText": "Mediale Votum Lv. 3 and Repatatio Lv. 3",
          "group": "Active",
          "type": "Buff",
          "target": "You and Your Party",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Argutus_Vita",
          "description": "Enable you and 1 party member to ignore Magic Resistance.",
          "levelDetails": [],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "2 seconds",
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
                  "value": "45"
                },
                {
                  "level": 3,
                  "value": "60"
                },
                {
                  "level": 4,
                  "value": "75"
                },
                {
                  "level": 5,
                  "value": "90"
                }
              ]
            }
          ],
          "spCost": "15 + (15 × Skill Level)",
          "duration": "90 + (30 × Skill Level) seconds",
          "translations": {
            "pt-BR": {
              "name": " Argutus Vita ",
              "description": "Abençoa você ou 1 membro do seu grupo para ignorar parte da TENM dos oponentes.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Argutus_Vita"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5271.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5271",
          "tree": {
            "idx": 23,
            "row": 3,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5268,
                "level": 3,
                "name": "Repatatio",
                "visible": true
              },
              {
                "id": 5269,
                "level": 3,
                "name": "Mediale Votum",
                "visible": true
              }
            ]
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
                "value": "15 + (15 × Skill Level)"
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
                "value": "0 seconds"
              },
              {
                "label": "Target",
                "value": "You and Your Party"
              },
              {
                "label": "Duration",
                "value": "90 + (30 × Skill Level) seconds"
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
                      "sp-cost": "45"
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
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5279,
          "imageFile": "5279.png",
          "name": "Pneumaticus Procella(Pneumaticus Procella)",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Magic",
          "target": "1 cell ground target",
          "recoversAp": "",
          "consumesAp": "30",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Creates a storm of the Holy Spirit in the target area, inflicting Holy Magic damage to targets within the range every 3 seconds for 12 seconds.\nDeals even more damage if the target is a demon/undead monster.\nDamage increases further based on the caster's base level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 2250%/ 2450% (Demon, Undead)\nArea of effect : 5x5Cell"
            },
            {
              "level": 2,
              "text": "MATK 4350%/ 4700% (Demon, Undead)\nArea of effect : 5x5Cell"
            },
            {
              "level": 3,
              "text": "MATK 6450%/ 6950% (Demon, Undead)\nArea of effect : 5x5Cell"
            },
            {
              "level": 4,
              "text": "MATK 8550%/ 9200% (Demon, Undead)\nArea of effect : 7x7Cell"
            },
            {
              "level": 5,
              "text": "MATK 10650%/ 11450% (Demon, Undead)\nArea of effect : 7x7Cell"
            },
            {
              "level": 6,
              "text": "MATK 12750%/ 13700% (Demon, Undead)\nArea of effect : 7x7Cell"
            },
            {
              "level": 7,
              "text": "MATK 14850%/ 15950% (Demon, Undead)\nArea of effect : 9x9Cell"
            },
            {
              "level": 8,
              "text": "MATK 16950%/ 18200% (Demon, Undead)\nArea of effect : 9x9Cell"
            },
            {
              "level": 9,
              "text": "MATK 19050%/ 20450% (Demon, Undead)\nArea of effect : 9x9Cell"
            },
            {
              "level": 10,
              "text": "MATK 21150%/ 22700% (Demon, Undead)\nArea of effect : 11x11Cell"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "4 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "5 seconds",
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
          "iconUrl": "assets/divine-pride/skills/5279.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5279",
          "tree": {
            "idx": 25,
            "row": 3,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 5273,
                "level": 10,
                "name": "Arbitrium",
                "visible": true
              },
              {
                "id": 5284,
                "level": 5,
                "name": "Flamen",
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
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "5 seconds"
              },
              {
                "label": "Target",
                "value": "1 cell ground target"
              },
              {
                "label": "AP Consumed",
                "value": "30"
              },
              {
                "label": "Pulse",
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
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "11x11",
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
              "skillName": "Pneumaticus Procella",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/cardinal/rebalance_2.md",
              "section": "9.5",
              "notes": [
                "Reduces cooldown from 60 seconds to 5 seconds.",
                "Removes 1.5 seconds delay after skill.",
                "Reduces AP consumption from 150 to 30.",
                "Increases damage from 2030%/3050%(demon and undead race)Matk to 21180%/22750%(demon and undead race)Matk per hit based on level 10 (Fidus Animus level 10)."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "60 seconds",
                  "after": "5 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 60 seconds to 5 seconds."
                },
                {
                  "label": "Cast Delay",
                  "before": "1.5 seconds delay",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes 1.5 seconds delay after skill."
                },
                {
                  "label": "AP Consumed",
                  "before": "150",
                  "after": "30",
                  "scope": "",
                  "source": "Reduces AP consumption from 150 to 30."
                },
                {
                  "label": "Damage",
                  "before": "2030%/3050%(demon and undead race)Matk",
                  "after": "21180%/22750%(demon and undead race)Matk per hit",
                  "scope": "Lv 10 (Fidus Animus level 10)",
                  "source": "Increases damage from 2030%/3050%(demon and undead race)Matk to 21180%/22750%(demon and undead race)Matk per hit based on level 10 (Fidus Animus level 10)."
                }
              ]
            },
            {
              "skillName": "Pneumaticus Procella",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/cardinal/rebalance_4.md",
              "section": "5.2",
              "notes": [
                "Reduces AP consumption from 30 to 20.",
                "Changes damage property from holy to neutral.",
                "Addes global cooldown by 0.5 seconds.",
                "Changes sound effect."
              ],
              "specRows": [
                {
                  "label": "AP Consumed",
                  "before": "30",
                  "after": "20",
                  "scope": "",
                  "source": "Reduces AP consumption from 30 to 20."
                },
                {
                  "label": "Damage",
                  "before": "holy (property)",
                  "after": "neutral (property)",
                  "scope": "",
                  "source": "Changes damage property from holy to neutral."
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
          "id": 5278,
          "imageFile": "5278.png",
          "name": "Competentia(Competentia)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Recovery",
          "target": "Yourself and your party members",
          "recoversAp": "",
          "consumesAp": "200/190/180/170/160",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Recovers HP/SP of yourself and party members within range, and increases the target's characteristic physical attack power (P.ATK) and characteristic magic attack power (S.MATK) for a certain period of time.",
          "levelDetails": [
            {
              "level": 1,
              "text": "HP/SP 20% Recovery\nP.ATK and S.MATK + 10 / Duration: 180 seconds"
            },
            {
              "level": 2,
              "text": "HP/SP 40% Recovery\nP.ATK and S.MATK + 20 / Duration: 210 seconds"
            },
            {
              "level": 3,
              "text": "HP/SP 60% Recovery\nP.ATK and S.MATK + 30 / Duration: 240 seconds"
            },
            {
              "level": 4,
              "text": "HP/SP 80% Recovery\nP.ATK and S.MATK + 40 / Duration: 270 seconds"
            },
            {
              "level": 5,
              "text": "HP/SP 100% Recovery\nP.ATK and S.MATK + 50 / Duration: 300 seconds"
            }
          ],
          "fixedCastTime": "4 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "60 seconds",
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
          "iconUrl": "assets/divine-pride/skills/5278.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5278",
          "tree": {
            "idx": 29,
            "row": 4,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5271,
                "level": 2,
                "name": "Argutus Vita",
                "visible": true
              },
              {
                "id": 5272,
                "level": 2,
                "name": "Argutus Telum",
                "visible": true
              },
              {
                "id": 5275,
                "level": 2,
                "name": "Presens Acies",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Recovery"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "Fixed Cast Time",
                "value": "4 seconds"
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
                "value": "Yourself and your party members"
              },
              {
                "label": "AP Consumed",
                "value": "200/190/180/170/160"
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
                      "effect": "HP / SP 20% Recovery",
                      "duration": "180 seconds",
                      "p-atk": "+ 10",
                      "s-matk": "+ 10",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "HP / SP 40% Recovery",
                      "duration": "210 seconds",
                      "p-atk": "+ 20",
                      "s-matk": "+ 20",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "HP / SP 60% Recovery",
                      "duration": "240 seconds",
                      "p-atk": "+ 30",
                      "s-matk": "+ 30",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "HP / SP 80% Recovery",
                      "duration": "270 seconds",
                      "p-atk": "+ 40",
                      "s-matk": "+ 40",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "HP / SP 100% Recovery",
                      "duration": "300 seconds",
                      "p-atk": "+ 50",
                      "s-matk": "+ 50",
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
              "skillName": "Competentia",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/cardinal/rebalance_2.md",
              "section": "9.4",
              "notes": [
                "Reduces AP consumption from 200 to 160 based on level 5.",
                "Increases duration from 240 seconds to 300 seconds based on level 5."
              ],
              "specRows": [
                {
                  "label": "AP Consumed",
                  "before": "200",
                  "after": "160",
                  "scope": "Lv 5",
                  "source": "Reduces AP consumption from 200 to 160 based on level 5."
                },
                {
                  "label": "Duration",
                  "before": "240 seconds",
                  "after": "300 seconds",
                  "scope": "Lv 5",
                  "source": "Increases duration from 240 seconds to 300 seconds based on level 5."
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
      "label": "Arch Bishop",
      "pointLimit": 69,
      "tree": {
        "columns": 7,
        "rows": 6
      },
      "skills": [
        {
          "id": 2038,
          "imageFile": "2038.png",
          "name": "Judex",
          "maxLevel": 10,
          "prerequisiteText": "Turn Undead 1",
          "group": "Holy Magic",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Judex",
          "description": "Deals holy damage to a targets within 3 cells around the target.\nDamage increases as caster's BaseLv increases",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 370%"
            },
            {
              "level": 2,
              "text": "MATK 440%"
            },
            {
              "level": 3,
              "text": "MATK 510%"
            },
            {
              "level": 4,
              "text": "MATK 580%"
            },
            {
              "level": 5,
              "text": "MATK 650%"
            },
            {
              "level": 6,
              "text": "MATK 720%"
            },
            {
              "level": 7,
              "text": "MATK 790%"
            },
            {
              "level": 8,
              "text": "MATK 860%"
            },
            {
              "level": 9,
              "text": "MATK 930%"
            },
            {
              "level": 10,
              "text": "MATK 1000%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "2 seconds",
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
                  "value": "34"
                },
                {
                  "level": 7,
                  "value": "36"
                },
                {
                  "level": 8,
                  "value": "38"
                },
                {
                  "level": 9,
                  "value": "40"
                },
                {
                  "level": 10,
                  "value": "42"
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
            }
          ],
          "spCost": "20 ~ 42",
          "castRange": "Magic",
          "areaOfEffect": "3 x 3",
          "translations": {
            "pt-BR": {
              "name": " Judex ",
              "description": "Conjura a luz do Juízo Final em um alvo.\nCausa dano mágico de propriedade Sagrado nos oponentes ao redor.\nDano = [Dano base × (Nv. de base ÷ 100)]%",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Judex"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2038.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2038",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 77,
                "level": 1,
                "name": "Turn Undead",
                "visible": false
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Holy Magic Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "20 ~ 42"
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
                "value": "0 seconds"
              },
              {
                "label": "Cast Range",
                "value": "Magic"
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
                      "range": "11 cells"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "23",
                      "range": "11 cells"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "26",
                      "range": "11 cells"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "29",
                      "range": "11 cells"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "32",
                      "range": "11 cells"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "34",
                      "range": "11 cells"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "36",
                      "range": "11 cells"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "38",
                      "range": "11 cells"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "40",
                      "range": "11 cells"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "42",
                      "range": "11 cells"
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
          "id": 2043,
          "imageFile": "2043.png",
          "name": "Coluseo Heal",
          "maxLevel": 3,
          "prerequisiteText": "Heal 1",
          "group": "Heal",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Coluseo_Heal",
          "description": "Recover HP of all party members around the caster. Additional heal given based on party member number.",
          "levelDetails": [
            {
              "level": 1,
              "text": "3 cells range AoE"
            },
            {
              "level": 2,
              "text": "7 cells range AoE"
            },
            {
              "level": 3,
              "text": "15 cells range AoE"
            }
          ],
          "variableCastTime": "3 seconds",
          "castDelay": "0 seconds",
          "cooldown": "2 seconds",
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
                  "value": "220"
                },
                {
                  "level": 3,
                  "value": "240"
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
                  "value": "100"
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
                  "value": "3"
                },
                {
                  "level": 2,
                  "value": "7"
                },
                {
                  "level": 3,
                  "value": "15"
                }
              ]
            }
          ],
          "spCost": "115 + (Skill Level × 15)",
          "fixedCastTime": "[1.5 − (Skill Level × 0.5)] seconds",
          "areaOfEffect": "7 x 7 ~ 31 x 31",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2043.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2043",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 28,
                "level": 1,
                "name": "Heal",
                "visible": false
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Heal Skill"
              },
              {
                "label": "Levels",
                "value": "3"
              },
              {
                "label": "SP Cost",
                "value": "115 + (Skill Level × 15)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "[1.5 − (Skill Level × 0.5)] seconds"
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
                "value": "2 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
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
                      "effect": "3 cells range AoE",
                      "sp-cost": "200",
                      "atk": "100",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "7 cells range AoE",
                      "sp-cost": "220",
                      "atk": "100",
                      "data-1": "7"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "15 cells range AoE",
                      "sp-cost": "240",
                      "atk": "100",
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
          "id": 2041,
          "imageFile": "2041.png",
          "name": "Clementia",
          "maxLevel": 3,
          "prerequisiteText": "Blessing 1",
          "group": "Supportive",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Clementia",
          "description": "Casts 'Blessing' on the caster and any party members within it's range. Blessing effect goes up based on caster's JobLevel.",
          "levelDetails": [
            {
              "level": 1,
              "text": "3 cells AoE / 120 sec. duration"
            },
            {
              "level": 2,
              "text": "7 cells AoE / 180 sec. duration"
            },
            {
              "level": 3,
              "text": "15 cells AoE / 240 sec. duration"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "3 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "280"
                },
                {
                  "level": 2,
                  "value": "320"
                },
                {
                  "level": 3,
                  "value": "360"
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
                  "value": "100"
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
                  "value": "3"
                },
                {
                  "level": 2,
                  "value": "7"
                },
                {
                  "level": 3,
                  "value": "15"
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
                  "value": "180000"
                },
                {
                  "level": 3,
                  "value": "240000"
                }
              ]
            }
          ],
          "spCost": "180 + (Skill Level × 20)",
          "duration": "(Skill Level + 1) minutes",
          "areaOfEffect": "7 x 7~31 x 31",
          "translations": {
            "pt-BR": {
              "name": " Clementia ",
              "description": "Conjura Bênção no maior nível aprendido em todos os membros do grupo ao redor.\nAcrescenta 1 ponto de FOR , INT , DES e Precisão adicional a cada 10 níveis de classe .",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Clementia"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2041.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2041",
          "tree": {
            "idx": 2,
            "row": 0,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 34,
                "level": 1,
                "name": "Blessing",
                "visible": false
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
                "value": "3"
              },
              {
                "label": "SP Cost",
                "value": "180 + (Skill Level × 20)"
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
                "label": "Area of Effect",
                "value": "7 x 7~31 x 31"
              },
              {
                "label": "Duration",
                "value": "(Skill Level + 1) minutes"
              }
            ],
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
                      "effect": "3 cells AoE / 120 sec. duration",
                      "sp-cost": "280",
                      "atk": "100",
                      "data-1": "3",
                      "data-2": "120000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "7 cells AoE / 180 sec. duration",
                      "sp-cost": "320",
                      "atk": "100",
                      "data-1": "7",
                      "data-2": "180000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "15 cells AoE / 240 sec. duration",
                      "sp-cost": "360",
                      "atk": "100",
                      "data-1": "15",
                      "data-2": "240000"
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
          "id": 2045,
          "imageFile": "2045.png",
          "name": "Praefatio",
          "maxLevel": 10,
          "prerequisiteText": "Kyrie Eleison 1",
          "group": "Supportive",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Praefatio",
          "description": "Casts 'Kyrie Eleison' on all party members. Def effect goes up when more party member joins.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Defend 7 times"
            },
            {
              "level": 2,
              "text": "Defend 8 times"
            },
            {
              "level": 3,
              "text": "Defend 9 times"
            },
            {
              "level": 4,
              "text": "Defend 10 times"
            },
            {
              "level": 5,
              "text": "Defend 11 times"
            },
            {
              "level": 6,
              "text": "Defend 12 times"
            },
            {
              "level": 7,
              "text": "Defend 13 times"
            },
            {
              "level": 8,
              "text": "Defend 14 times"
            },
            {
              "level": 9,
              "text": "Defend 15 times"
            },
            {
              "level": 10,
              "text": "Defend 16 times"
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
                },
                {
                  "level": 8,
                  "value": "160"
                },
                {
                  "level": 9,
                  "value": "170"
                },
                {
                  "level": 10,
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
                  "value": "7"
                },
                {
                  "level": 2,
                  "value": "8"
                },
                {
                  "level": 3,
                  "value": "9"
                },
                {
                  "level": 4,
                  "value": "10"
                },
                {
                  "level": 5,
                  "value": "11"
                },
                {
                  "level": 6,
                  "value": "12"
                },
                {
                  "level": 7,
                  "value": "13"
                },
                {
                  "level": 8,
                  "value": "14"
                },
                {
                  "level": 9,
                  "value": "15"
                },
                {
                  "level": 10,
                  "value": "16"
                }
              ]
            },
            {
              "label": "Data 2",
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
            },
            {
              "label": "Data 3",
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
                },
                {
                  "level": 6,
                  "value": "120000"
                },
                {
                  "level": 7,
                  "value": "120000"
                },
                {
                  "level": 8,
                  "value": "120000"
                },
                {
                  "level": 9,
                  "value": "120000"
                },
                {
                  "level": 10,
                  "value": "120000"
                }
              ]
            }
          ],
          "spCost": "50 + (Skill Level × 10)",
          "cooldown": "[10 + (Skill Level × 3)] sec",
          "duration": "2 minutes",
          "translations": {
            "pt-BR": {
              "name": " Praefatio ",
              "description": "Envolve os membros do grupo em uma barreira que bloqueia de danos físicos.\nO efeito termina quando a duração acabar, ao atingir o limite de bloqueios ou quando a barreira sofrer dano baseado no HP máximo do personagem.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Praefatio"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2045.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2045",
          "tree": {
            "idx": 3,
            "row": 0,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 73,
                "level": 1,
                "name": "Kyrie Eleison",
                "visible": false
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
                "label": "SP Cost",
                "value": "50 + (Skill Level × 10)"
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
                "value": "[10 + (Skill Level × 3)] sec"
              },
              {
                "label": "Target",
                "value": "Self"
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
                      "effect": "Defend 7 times",
                      "sp-cost": "90",
                      "range": "11 cells",
                      "data-1": "7",
                      "data-2": "18",
                      "data-3": "120000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Defend 8 times",
                      "sp-cost": "100",
                      "range": "11 cells",
                      "data-1": "8",
                      "data-2": "20",
                      "data-3": "120000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Defend 9 times",
                      "sp-cost": "110",
                      "range": "11 cells",
                      "data-1": "9",
                      "data-2": "22",
                      "data-3": "120000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Defend 10 times",
                      "sp-cost": "120",
                      "range": "11 cells",
                      "data-1": "10",
                      "data-2": "24",
                      "data-3": "120000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Defend 11 times",
                      "sp-cost": "130",
                      "range": "11 cells",
                      "data-1": "11",
                      "data-2": "26",
                      "data-3": "120000"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Defend 12 times",
                      "sp-cost": "140",
                      "range": "11 cells",
                      "data-1": "12",
                      "data-2": "28",
                      "data-3": "120000"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Defend 13 times",
                      "sp-cost": "150",
                      "range": "11 cells",
                      "data-1": "13",
                      "data-2": "30",
                      "data-3": "120000"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Defend 14 times",
                      "sp-cost": "160",
                      "range": "11 cells",
                      "data-1": "14",
                      "data-2": "32",
                      "data-3": "120000"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Defend 15 times",
                      "sp-cost": "170",
                      "range": "11 cells",
                      "data-1": "15",
                      "data-2": "34",
                      "data-3": "120000"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Defend 16 times",
                      "sp-cost": "180",
                      "range": "11 cells",
                      "data-1": "16",
                      "data-2": "36",
                      "data-3": "120000"
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
          "id": 2054,
          "imageFile": "2054.png",
          "name": "Duple Light / Two Lights",
          "maxLevel": 10,
          "prerequisiteText": "Aspersio 1",
          "group": "Active",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Duple_Light_%2F_Two_Lights",
          "description": "Summons two holy lights, deals extra damage when melee attacking.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Physical ATK + 165% Magical Attack + 440% / Lasts for 90 sec"
            },
            {
              "level": 2,
              "text": "Physical ATK + 180% Magical Attack + 480% / Lasts for 120 sec"
            },
            {
              "level": 3,
              "text": "Physical ATK + 195% Magical Attack + 520% / Lasts for 150 sec"
            },
            {
              "level": 4,
              "text": "Physical ATK + 210% Magical Attack + 560% / Lasts for 180 sec"
            },
            {
              "level": 5,
              "text": "Physical ATK + 225% Magical Attack + 600% / Lasts for 210 sec"
            },
            {
              "level": 6,
              "text": "Physical ATK + 240% Magical Attack + 640% / Lasts for 240 sec"
            },
            {
              "level": 7,
              "text": "Physical ATK + 255% Magical Attack + 680% / Lasts for 270 sec"
            },
            {
              "level": 8,
              "text": "Physical ATK + 270% Magical Attack + 720% / Lasts for 300 sec"
            },
            {
              "level": 9,
              "text": "Physical ATK + 285% Magical Attack + 760% / Lasts for 330 sec"
            },
            {
              "level": 10,
              "text": "Physical ATK + 300% Magical Attack + 800% / Lasts for 360 sec"
            }
          ],
          "fixedCastTime": "2 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "1 second",
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
                  "value": "90000"
                },
                {
                  "level": 2,
                  "value": "120000"
                },
                {
                  "level": 3,
                  "value": "150000"
                },
                {
                  "level": 4,
                  "value": "180000"
                },
                {
                  "level": 5,
                  "value": "210000"
                },
                {
                  "level": 6,
                  "value": "240000"
                },
                {
                  "level": 7,
                  "value": "270000"
                },
                {
                  "level": 8,
                  "value": "300000"
                },
                {
                  "level": 9,
                  "value": "330000"
                },
                {
                  "level": 10,
                  "value": "360000"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2054.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2054",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 68,
                "level": 1,
                "name": "Aspersio",
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
                "value": "2 seconds"
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
                    "id": "physical-atk-165-magical-attack",
                    "label": "Physical Atk + 165% Magical Attack"
                  },
                  {
                    "id": "physical-atk-180-magical-attack",
                    "label": "Physical Atk + 180% Magical Attack"
                  },
                  {
                    "id": "physical-atk-195-magical-attack",
                    "label": "Physical Atk + 195% Magical Attack"
                  },
                  {
                    "id": "physical-atk-210-magical-attack",
                    "label": "Physical Atk + 210% Magical Attack"
                  },
                  {
                    "id": "physical-atk-225-magical-attack",
                    "label": "Physical Atk + 225% Magical Attack"
                  },
                  {
                    "id": "physical-atk-240-magical-attack",
                    "label": "Physical Atk + 240% Magical Attack"
                  },
                  {
                    "id": "physical-atk-255-magical-attack",
                    "label": "Physical Atk + 255% Magical Attack"
                  },
                  {
                    "id": "physical-atk-270-magical-attack",
                    "label": "Physical Atk + 270% Magical Attack"
                  },
                  {
                    "id": "physical-atk-285-magical-attack",
                    "label": "Physical Atk + 285% Magical Attack"
                  },
                  {
                    "id": "physical-atk-300-magical-attack",
                    "label": "Physical Atk + 300% Magical Attack"
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
                      "physical-atk-165-magical-attack": "+ 440%",
                      "effect": "Lasts for 90 sec",
                      "sp-cost": "55",
                      "range": "11 cells",
                      "data-1": "90000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "physical-atk-180-magical-attack": "+ 480%",
                      "effect": "Lasts for 120 sec",
                      "sp-cost": "60",
                      "range": "11 cells",
                      "data-1": "120000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "physical-atk-195-magical-attack": "+ 520%",
                      "effect": "Lasts for 150 sec",
                      "sp-cost": "65",
                      "range": "11 cells",
                      "data-1": "150000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "physical-atk-210-magical-attack": "+ 560%",
                      "effect": "Lasts for 180 sec",
                      "sp-cost": "70",
                      "range": "11 cells",
                      "data-1": "180000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "physical-atk-225-magical-attack": "+ 600%",
                      "effect": "Lasts for 210 sec",
                      "sp-cost": "75",
                      "range": "11 cells",
                      "data-1": "210000"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "physical-atk-240-magical-attack": "+ 640%",
                      "effect": "Lasts for 240 sec",
                      "sp-cost": "80",
                      "range": "11 cells",
                      "data-1": "240000"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "physical-atk-255-magical-attack": "+ 680%",
                      "effect": "Lasts for 270 sec",
                      "sp-cost": "85",
                      "range": "11 cells",
                      "data-1": "270000"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "physical-atk-270-magical-attack": "+ 720%",
                      "effect": "Lasts for 300 sec",
                      "sp-cost": "90",
                      "range": "11 cells",
                      "data-1": "300000"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "physical-atk-285-magical-attack": "+ 760%",
                      "effect": "Lasts for 330 sec",
                      "sp-cost": "95",
                      "range": "11 cells",
                      "data-1": "330000"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "physical-atk-300-magical-attack": "+ 800%",
                      "effect": "Lasts for 360 sec",
                      "sp-cost": "100",
                      "range": "11 cells",
                      "data-1": "360000"
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
          "id": 2047,
          "imageFile": "2047.png",
          "name": "Lauda Agnus",
          "maxLevel": 4,
          "prerequisiteText": "Recovery 1",
          "group": "Recover",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Lauda_Agnus",
          "description": "Recover Freezing, Stone Curse, Dark Curse, Frozen, Crystallization, and Burning of all party members. MaxHP bonus when casting on normal condition party member.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Success Rate 70% / MaxHP + 4%"
            },
            {
              "level": 2,
              "text": "Success Rate 80% / MaxHP + 6%"
            },
            {
              "level": 3,
              "text": "Success Rate 90% / MaxHP + 8%"
            },
            {
              "level": 4,
              "text": "Success Rate 100% / MaxHP + 10%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
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
                  "value": "70"
                },
                {
                  "level": 4,
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
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "70"
                },
                {
                  "level": 2,
                  "value": "80"
                },
                {
                  "level": 3,
                  "value": "90"
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
                  "value": "4"
                },
                {
                  "level": 2,
                  "value": "6"
                },
                {
                  "level": 3,
                  "value": "8"
                },
                {
                  "level": 4,
                  "value": "10"
                }
              ]
            },
            {
              "label": "Data 3",
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
                }
              ]
            }
          ],
          "spCost": "40 + (Skill Level × 10)",
          "duration": "1 minute",
          "areaOfEffect": "31 x 31",
          "translations": {
            "pt-BR": {
              "name": " Lauda Agnus ",
              "description": "Inicia um ritual de louvor.\nConcede a chance de aumentar o HP e remover efeitos negativos do grupo na tela do usuário.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Lauda_Agnus"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2047.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2047",
          "tree": {
            "idx": 5,
            "row": 0,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 72,
                "level": 1,
                "name": "Status Recovery",
                "visible": false
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Recover Skill"
              },
              {
                "label": "Levels",
                "value": "4"
              },
              {
                "label": "SP Cost",
                "value": "40 + (Skill Level × 10)"
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
                "value": "3 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "31 x 31"
              },
              {
                "label": "Duration",
                "value": "1 minute"
              }
            ],
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
                    "id": "range",
                    "label": "Range"
                  },
                  {
                    "id": "success-rate-100-maxhp",
                    "label": "Success Rate 100% / MaxHP"
                  },
                  {
                    "id": "success-rate-70-maxhp",
                    "label": "Success Rate 70% / MaxHP"
                  },
                  {
                    "id": "success-rate-80-maxhp",
                    "label": "Success Rate 80% / MaxHP"
                  },
                  {
                    "id": "success-rate-90-maxhp",
                    "label": "Success Rate 90% / MaxHP"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "success-rate-70-maxhp": "+ 4%",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-1": "70",
                      "data-2": "4",
                      "data-3": "60000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "success-rate-80-maxhp": "+ 6%",
                      "sp-cost": "60",
                      "range": "11 cells",
                      "data-1": "80",
                      "data-2": "6",
                      "data-3": "60000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "success-rate-90-maxhp": "+ 8%",
                      "sp-cost": "70",
                      "range": "11 cells",
                      "data-1": "90",
                      "data-2": "8",
                      "data-3": "60000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "success-rate-100-maxhp": "+ 10%",
                      "sp-cost": "80",
                      "range": "11 cells",
                      "data-1": "100",
                      "data-2": "10",
                      "data-3": "60000"
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
          "id": 2042,
          "imageFile": "2042.png",
          "name": "Cantocandidus",
          "maxLevel": 3,
          "prerequisiteText": "Increase AGI 1",
          "group": "Supportive",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Cantocandidus",
          "description": "Casts 'Increase AGI' on the caster and any party members within range. AGI effect goes up based on caster's JobLevel.",
          "levelDetails": [
            {
              "level": 1,
              "text": "3 cell range / 120 sec. duration"
            },
            {
              "level": 2,
              "text": "7 cell range / 180 sec. duration"
            },
            {
              "level": 3,
              "text": "15 cell range / 240 sec. duration"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "3 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0 seconds",
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
                  "value": "220"
                },
                {
                  "level": 3,
                  "value": "240"
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
                  "value": "100"
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
                  "value": "3"
                },
                {
                  "level": 2,
                  "value": "7"
                },
                {
                  "level": 3,
                  "value": "15"
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
                  "value": "180000"
                },
                {
                  "level": 3,
                  "value": "240000"
                }
              ]
            }
          ],
          "spCost": "130 + (Skill Level × 15)",
          "duration": "(Skill Level + 1) minutes",
          "areaOfEffect": "7 x 7 ~ 31 x 31",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2042.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2042",
          "tree": {
            "idx": 6,
            "row": 0,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 29,
                "level": 1,
                "name": "Increase Agility",
                "visible": false
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
                "value": "3"
              },
              {
                "label": "SP Cost",
                "value": "130 + (Skill Level × 15)"
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
                "label": "Area of Effect",
                "value": "7 x 7 ~ 31 x 31"
              },
              {
                "label": "Duration",
                "value": "(Skill Level + 1) minutes"
              }
            ],
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
                      "effect": "3 cells range / 120 sec. duration",
                      "sp-cost": "200",
                      "atk": "100",
                      "data-1": "3",
                      "data-2": "120000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "7 cells range / 180 sec. duration",
                      "sp-cost": "220",
                      "atk": "100",
                      "data-1": "7",
                      "data-2": "180000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "15 cells range / 240 sec. duration",
                      "sp-cost": "240",
                      "atk": "100",
                      "data-1": "15",
                      "data-2": "240000"
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
          "id": 2050,
          "imageFile": "2050.png",
          "name": "Renovatio",
          "maxLevel": 4,
          "prerequisiteText": "Coluseo Heal 3",
          "group": "Heal",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Renovatio",
          "description": "Restores a certain amount of HP per 5 seconds to caster and party members on the screen.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Heal 5% of HP every 5 seconds for 90 seconds"
            },
            {
              "level": 2,
              "text": "Heal 6% of HP every 5 seconds for 120 seconds"
            },
            {
              "level": 3,
              "text": "Heal 7% of HP every 5 seconds for 150 seconds"
            },
            {
              "level": 4,
              "text": "Heal 8% of HP every 5 seconds for 180 seconds"
            }
          ],
          "fixedCastTime": "2 seconds",
          "variableCastTime": "3 seconds",
          "castDelay": "0 seconds",
          "cooldown": "1 second",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "240"
                },
                {
                  "level": 2,
                  "value": "280"
                },
                {
                  "level": 3,
                  "value": "320"
                },
                {
                  "level": 4,
                  "value": "360"
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
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "90000"
                },
                {
                  "level": 2,
                  "value": "120000"
                },
                {
                  "level": 3,
                  "value": "150000"
                },
                {
                  "level": 4,
                  "value": "180000"
                }
              ]
            },
            {
              "label": "Data 3",
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
                }
              ]
            }
          ],
          "spCost": "200 + (Skill Level × 40)",
          "duration": "60 + (Skill Level × 30) seconds",
          "areaOfEffect": "31 x 31",
          "translations": {
            "pt-BR": {
              "name": " Renovatio ",
              "description": "Invoca um brilho divino.\nRegenera HP a cada 5 segundos de todos os membros do grupo na tela do usuário.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Renovatio"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2050.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2050",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 2043,
                "level": 3,
                "name": "Coluseo Heal",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Heal Skill"
              },
              {
                "label": "Levels",
                "value": "4"
              },
              {
                "label": "SP Cost",
                "value": "200 + (Skill Level × 40)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "2 seconds"
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
                "value": "1 second"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "31 x 31"
              },
              {
                "label": "Duration",
                "value": "60 + (Skill Level × 30) seconds"
              }
            ],
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
                      "effect": "Heal 5% of HP every 5 seconds for 90 seconds",
                      "sp-cost": "240",
                      "data-1": "5",
                      "data-2": "90000",
                      "data-3": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Heal 6% of HP every 5 seconds for 120 seconds",
                      "sp-cost": "280",
                      "data-1": "6",
                      "data-2": "120000",
                      "data-3": "15"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Heal 7% of HP every 5 seconds for 150 seconds",
                      "sp-cost": "320",
                      "data-1": "7",
                      "data-2": "150000",
                      "data-3": "15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Heal 8% of HP every 5 seconds for 180 seconds",
                      "sp-cost": "360",
                      "data-1": "8",
                      "data-2": "180000",
                      "data-3": "15"
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
          "id": 2039,
          "imageFile": "2039.png",
          "name": "Ancilla",
          "maxLevel": 1,
          "prerequisiteText": "Clementia 3",
          "group": "Ancilla",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Ancilla",
          "description": "Creates magic stone called Ancilla.\nWhen used, consumes SP 10% and 1 Blue Gemstone. When using Ancilla,\nincrease healing by 15% for 60 sec, SP recovery by 30%, property of Adoramus becomes neutral.",
          "levelDetails": [],
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
            }
          ],
          "spCost": "10%",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2039.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2039",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2041,
                "level": 3,
                "name": "Clementia",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Ancilla Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "10%"
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
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2046,
          "imageFile": "2046.png",
          "name": "Oratio",
          "maxLevel": 10,
          "prerequisiteText": "Praefatio 5",
          "group": "Debuff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Oratio",
          "description": "Decreases the Holy resistance\nof all enemies on screen for 30 seconds.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Success Rate 45%/resistance -2%"
            },
            {
              "level": 2,
              "text": "Success Rate 50%/resistance -4%"
            },
            {
              "level": 3,
              "text": "Success Rate 55%/resistance -6%"
            },
            {
              "level": 4,
              "text": "Success Rate 60%/resistance -8%"
            },
            {
              "level": 5,
              "text": "Success Rate 65%/resistance -10%"
            },
            {
              "level": 6,
              "text": "Success Rate 70%/resistance -12%"
            },
            {
              "level": 7,
              "text": "Success Rate 75%/resistance -14%"
            },
            {
              "level": 8,
              "text": "Success Rate 80%/resistance -16%"
            },
            {
              "level": 9,
              "text": "Success Rate 85%/resistance -18%"
            },
            {
              "level": 10,
              "text": "Success Rate 90%/resistance -20%"
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
                  "value": "35"
                },
                {
                  "level": 2,
                  "value": "38"
                },
                {
                  "level": 3,
                  "value": "41"
                },
                {
                  "level": 4,
                  "value": "44"
                },
                {
                  "level": 5,
                  "value": "47"
                },
                {
                  "level": 6,
                  "value": "50"
                },
                {
                  "level": 7,
                  "value": "53"
                },
                {
                  "level": 8,
                  "value": "56"
                },
                {
                  "level": 9,
                  "value": "59"
                },
                {
                  "level": 10,
                  "value": "62"
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
                  "value": "45"
                },
                {
                  "level": 2,
                  "value": "50"
                },
                {
                  "level": 3,
                  "value": "55"
                },
                {
                  "level": 4,
                  "value": "60"
                },
                {
                  "level": 5,
                  "value": "65"
                },
                {
                  "level": 6,
                  "value": "70"
                },
                {
                  "level": 7,
                  "value": "75"
                },
                {
                  "level": 8,
                  "value": "80"
                },
                {
                  "level": 9,
                  "value": "85"
                },
                {
                  "level": 10,
                  "value": "90"
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
                  "value": "30000"
                },
                {
                  "level": 3,
                  "value": "30000"
                },
                {
                  "level": 4,
                  "value": "30000"
                },
                {
                  "level": 5,
                  "value": "30000"
                },
                {
                  "level": 6,
                  "value": "30000"
                },
                {
                  "level": 7,
                  "value": "30000"
                },
                {
                  "level": 8,
                  "value": "30000"
                },
                {
                  "level": 9,
                  "value": "30000"
                },
                {
                  "level": 10,
                  "value": "30000"
                }
              ]
            }
          ],
          "spCost": "32 + (Skill Level × 3)",
          "duration": "~30 seconds",
          "areaOfEffect": "31 x 31",
          "translations": {
            "pt-BR": {
              "name": " Oratio ",
              "description": "Faz uma prece divina, marcando alvos com Selo de Deus.\nAlvos marcados com o Selo terão menos resistência à Sagrado .\nO Selo dura 30 segundos.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Oratio"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2046.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2046",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2045,
                "level": 5,
                "name": "Praefatio",
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
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "32 + (Skill Level × 3)"
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
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "31 x 31"
              },
              {
                "label": "Duration",
                "value": "~30 seconds"
              }
            ],
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
                    "id": "range",
                    "label": "Range"
                  },
                  {
                    "id": "success-rate-45-resistance",
                    "label": "Success Rate 45%/resistance"
                  },
                  {
                    "id": "success-rate-50-resistance",
                    "label": "Success Rate 50%/resistance"
                  },
                  {
                    "id": "success-rate-55-resistance",
                    "label": "Success Rate 55%/resistance"
                  },
                  {
                    "id": "success-rate-60-resistance",
                    "label": "Success Rate 60%/resistance"
                  },
                  {
                    "id": "success-rate-65-resistance",
                    "label": "Success Rate 65%/resistance"
                  },
                  {
                    "id": "success-rate-70-resistance",
                    "label": "Success Rate 70%/resistance"
                  },
                  {
                    "id": "success-rate-75-resistance",
                    "label": "Success Rate 75%/resistance"
                  },
                  {
                    "id": "success-rate-80-resistance",
                    "label": "Success Rate 80%/resistance"
                  },
                  {
                    "id": "success-rate-85-resistance",
                    "label": "Success Rate 85%/resistance"
                  },
                  {
                    "id": "success-rate-90-resistance",
                    "label": "Success Rate 90%/resistance"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "success-rate-45-resistance": "-2%",
                      "sp-cost": "35",
                      "range": "11 cells",
                      "data-1": "45",
                      "data-2": "2",
                      "data-3": "30000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "success-rate-50-resistance": "-4%",
                      "sp-cost": "38",
                      "range": "11 cells",
                      "data-1": "50",
                      "data-2": "4",
                      "data-3": "30000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "success-rate-55-resistance": "-6%",
                      "sp-cost": "41",
                      "range": "11 cells",
                      "data-1": "55",
                      "data-2": "6",
                      "data-3": "30000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "success-rate-60-resistance": "-8%",
                      "sp-cost": "44",
                      "range": "11 cells",
                      "data-1": "60",
                      "data-2": "8",
                      "data-3": "30000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "success-rate-65-resistance": "-10%",
                      "sp-cost": "47",
                      "range": "11 cells",
                      "data-1": "65",
                      "data-2": "10",
                      "data-3": "30000"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "success-rate-70-resistance": "-12%",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-1": "70",
                      "data-2": "12",
                      "data-3": "30000"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "success-rate-75-resistance": "-14%",
                      "sp-cost": "53",
                      "range": "11 cells",
                      "data-1": "75",
                      "data-2": "14",
                      "data-3": "30000"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "success-rate-80-resistance": "-16%",
                      "sp-cost": "56",
                      "range": "11 cells",
                      "data-1": "80",
                      "data-2": "16",
                      "data-3": "30000"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "success-rate-85-resistance": "-18%",
                      "sp-cost": "59",
                      "range": "11 cells",
                      "data-1": "85",
                      "data-2": "18",
                      "data-3": "30000"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "success-rate-90-resistance": "-20%",
                      "sp-cost": "62",
                      "range": "11 cells",
                      "data-1": "90",
                      "data-2": "20",
                      "data-3": "30000"
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
          "id": 2048,
          "imageFile": "2048.png",
          "name": "Lauda Ramus",
          "maxLevel": 4,
          "prerequisiteText": "Lauda Agnus 2",
          "group": "Recovery",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Lauda_Ramus",
          "description": "Cures status effects Silence, Sleep, Stun Curse, Howling, and Deep Sleep from all party members. Critical damage bonus when casting on normal condition party member.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Success Rate 70% / Critical Damage +5%"
            },
            {
              "level": 2,
              "text": "Success Rate 80% / Critical Damage +10%"
            },
            {
              "level": 3,
              "text": "Success Rate 90% / Critical Damage +15%"
            },
            {
              "level": 4,
              "text": "Success Rate 100% / Critical Damage +20%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
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
                  "value": "70"
                },
                {
                  "level": 4,
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
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "70"
                },
                {
                  "level": 2,
                  "value": "80"
                },
                {
                  "level": 3,
                  "value": "90"
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
                }
              ]
            },
            {
              "label": "Data 3",
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
                }
              ]
            }
          ],
          "spCost": "40 + (Skill Level × 10)",
          "duration": "1 minute",
          "areaOfEffect": "31 x 31",
          "translations": {
            "pt-BR": {
              "name": " Lauda Ramus ",
              "description": "Inicia um ritual de louvor.\nConcede a chance de aumentar o dano crítico e remover efeitos negativos do grupo na tela do usuário.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Lauda_Ramus"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2048.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2048",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2047,
                "level": 2,
                "name": "Lauda Agnus",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Recovery Skill"
              },
              {
                "label": "Levels",
                "value": "4"
              },
              {
                "label": "SP Cost",
                "value": "40 + (Skill Level × 10)"
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
                "value": "3 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "31 x 31"
              },
              {
                "label": "Duration",
                "value": "1 minute"
              }
            ],
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
                    "id": "range",
                    "label": "Range"
                  },
                  {
                    "id": "success-rate-100-critical-damage",
                    "label": "Success Rate 100% / Critical Damage"
                  },
                  {
                    "id": "success-rate-70-critical-damage",
                    "label": "Success Rate 70% / Critical Damage"
                  },
                  {
                    "id": "success-rate-80-critical-damage",
                    "label": "Success Rate 80% / Critical Damage"
                  },
                  {
                    "id": "success-rate-90-critical-damage",
                    "label": "Success Rate 90% / Critical Damage"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "success-rate-70-critical-damage": "+5%",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-1": "70",
                      "data-2": "5",
                      "data-3": "60000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "success-rate-80-critical-damage": "+10%",
                      "sp-cost": "60",
                      "range": "11 cells",
                      "data-1": "80",
                      "data-2": "10",
                      "data-3": "60000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "success-rate-90-critical-damage": "+15%",
                      "sp-cost": "70",
                      "range": "11 cells",
                      "data-1": "90",
                      "data-2": "15",
                      "data-3": "60000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "success-rate-100-critical-damage": "+20%",
                      "sp-cost": "80",
                      "range": "11 cells",
                      "data-1": "100",
                      "data-2": "20",
                      "data-3": "60000"
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
          "id": 2040,
          "imageFile": "2040.png",
          "name": "Adoramus",
          "maxLevel": 10,
          "prerequisiteText": "Judex 5, Ancilla 1, Magnus Exorcismus 1",
          "group": "Holy Magic",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Adoramus",
          "description": "Deals holy magic damage in AoE, lowering AGI and Shadow.\nDamage increases based on BaseLv, consumes 1 Blue Gemstone when used.\nWhile in Ancilla effect, attack property becomes neutral.\nWhen Cleric is around, skill no longer consumes Blue Gemstone, Cleric's partial SP is consumed, caster's Adoramus SP consumption is reduced.\nCannot damage targets on Land Protector.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 550%/ Area of Effect 7x7Cell"
            },
            {
              "level": 2,
              "text": "MATK 800%/ Area of Effect 7x7Cell"
            },
            {
              "level": 3,
              "text": "MATK 1050%/ Area of Effect 7x7Cell"
            },
            {
              "level": 4,
              "text": "MATK 1300%/ Area of Effect 7x7Cell"
            },
            {
              "level": 5,
              "text": "MATK 1550%/ Area of Effect 7x7Cell"
            },
            {
              "level": 6,
              "text": "MATK 1800%/ Area of Effect 7x7Cell"
            },
            {
              "level": 7,
              "text": "MATK 2050%/ Area of Effect 11x11Cell"
            },
            {
              "level": 8,
              "text": "MATK 2300%/ Area of Effect 11x11Cell"
            },
            {
              "level": 9,
              "text": "MATK 2550%/ Area of Effect 11x11Cell"
            },
            {
              "level": 10,
              "text": "MATK 2800%/ Area of Effect 11x11Cell"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "2.5 seconds",
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
                  "value": "40"
                },
                {
                  "level": 3,
                  "value": "48"
                },
                {
                  "level": 4,
                  "value": "56"
                },
                {
                  "level": 5,
                  "value": "64"
                },
                {
                  "level": 6,
                  "value": "72"
                },
                {
                  "level": 7,
                  "value": "80"
                },
                {
                  "level": 8,
                  "value": "88"
                },
                {
                  "level": 9,
                  "value": "96"
                },
                {
                  "level": 10,
                  "value": "104"
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
                },
                {
                  "level": 6,
                  "value": "11000"
                },
                {
                  "level": 7,
                  "value": "12000"
                },
                {
                  "level": 8,
                  "value": "13000"
                },
                {
                  "level": 9,
                  "value": "14000"
                },
                {
                  "level": 10,
                  "value": "15000"
                }
              ]
            },
            {
              "label": "Data 2",
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
                },
                {
                  "level": 4,
                  "value": "30000"
                },
                {
                  "level": 5,
                  "value": "35000"
                },
                {
                  "level": 6,
                  "value": "40000"
                },
                {
                  "level": 7,
                  "value": "45000"
                },
                {
                  "level": 8,
                  "value": "50000"
                },
                {
                  "level": 9,
                  "value": "55000"
                },
                {
                  "level": 10,
                  "value": "60000"
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
                },
                {
                  "level": 6,
                  "value": "8"
                },
                {
                  "level": 7,
                  "value": "9"
                },
                {
                  "level": 8,
                  "value": "10"
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
              "label": "Data 4",
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
          "spCost": "24 + (Skill Level × 6)",
          "castRange": "Magic",
          "areaOfEffect": "7 x 7 ~ 11 x 11",
          "translations": {
            "pt-BR": {
              "name": " Adoramus ",
              "description": "A luz do Divino que cai do céu.\nCausa dano mágico de propriedade Sagrado .\nSe Ancila estiver ativa, a propriedade será Neutro .",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Adoramus"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2040.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2040",
          "tree": {
            "idx": 14,
            "row": 2,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 79,
                "level": 1,
                "name": "Magnus Exorcismus",
                "visible": false
              },
              {
                "id": 2038,
                "level": 5,
                "name": "Judex",
                "visible": true
              },
              {
                "id": 2039,
                "level": 1,
                "name": "Ancilla",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Holy Magic Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "24 + (Skill Level × 6)"
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
                "value": "2.5 seconds"
              },
              {
                "label": "Cast Range",
                "value": "Magic"
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
                      "area-of-effect": "7x7",
                      "sp-cost": "32",
                      "range": "11 cells",
                      "data-1": "6000",
                      "data-2": "15000",
                      "data-3": "3",
                      "data-4": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "40",
                      "range": "11 cells",
                      "data-1": "7000",
                      "data-2": "20000",
                      "data-3": "4",
                      "data-4": "3"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "48",
                      "range": "11 cells",
                      "data-1": "8000",
                      "data-2": "25000",
                      "data-3": "5",
                      "data-4": "3"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "56",
                      "range": "11 cells",
                      "data-1": "9000",
                      "data-2": "30000",
                      "data-3": "6",
                      "data-4": "3"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "64",
                      "range": "11 cells",
                      "data-1": "10000",
                      "data-2": "35000",
                      "data-3": "7",
                      "data-4": "3"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "72",
                      "range": "11 cells",
                      "data-1": "11000",
                      "data-2": "40000",
                      "data-3": "8",
                      "data-4": "3"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "11x11",
                      "sp-cost": "80",
                      "range": "11 cells",
                      "data-1": "12000",
                      "data-2": "45000",
                      "data-3": "9",
                      "data-4": "5"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "11x11",
                      "sp-cost": "88",
                      "range": "11 cells",
                      "data-1": "13000",
                      "data-2": "50000",
                      "data-3": "10",
                      "data-4": "5"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "11x11",
                      "sp-cost": "96",
                      "range": "11 cells",
                      "data-1": "14000",
                      "data-2": "55000",
                      "data-3": "11",
                      "data-4": "5"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "11x11",
                      "sp-cost": "104",
                      "range": "11 cells",
                      "data-1": "15000",
                      "data-2": "60000",
                      "data-3": "12",
                      "data-4": "5"
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
          "id": 2051,
          "imageFile": "2051.png",
          "name": "HIGHNESSHEAL / High Priest's Healing",
          "maxLevel": 5,
          "prerequisiteText": "Renovatio 1",
          "group": "Heal",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/HIGHNESSHEAL_%2F_High_Priest's_Healing",
          "description": "Restores a lot more HP than acolyte's heal.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Healing amount 2x"
            },
            {
              "level": 2,
              "text": "Healing amount 2.3x"
            },
            {
              "level": 3,
              "text": "Healing amount 2.6x"
            },
            {
              "level": 4,
              "text": "Healing amount 2.9x"
            },
            {
              "level": 5,
              "text": "Healing amount 3.2x"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "3 seconds",
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
                  "value": "100"
                },
                {
                  "level": 3,
                  "value": "130"
                },
                {
                  "level": 4,
                  "value": "160"
                },
                {
                  "level": 5,
                  "value": "190"
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
                  "value": "200"
                },
                {
                  "level": 2,
                  "value": "230"
                },
                {
                  "level": 3,
                  "value": "260"
                },
                {
                  "level": 4,
                  "value": "290"
                },
                {
                  "level": 5,
                  "value": "320"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2051.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2051",
          "tree": {
            "idx": 15,
            "row": 2,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 2050,
                "level": 1,
                "name": "Renovatio",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Heal Skill"
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
                "value": "1 second"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Healing amount 2 x",
                      "sp-cost": "70",
                      "range": "11 cells",
                      "data-1": "200"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Healing amount 2.3 x",
                      "sp-cost": "100",
                      "range": "11 cells",
                      "data-1": "230"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Healing amount 2.6 x",
                      "sp-cost": "130",
                      "range": "11 cells",
                      "data-1": "260"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Healing amount 2.9 x",
                      "sp-cost": "160",
                      "range": "11 cells",
                      "data-1": "290"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Healing amount 3.2 x",
                      "sp-cost": "190",
                      "range": "11 cells",
                      "data-1": "320"
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
          "id": 5073,
          "imageFile": "5073.png",
          "name": "CONVENIO / Gather",
          "maxLevel": 1,
          "prerequisiteText": "Ancilla 1, Oratio 5",
          "group": "Support",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/CONVENIO_%2F_Gather",
          "description": "Summons party members on the same map to the caster's location.\nThe skill cannot be used on PVP areas or maps where Teleport is disabled.\nThe skill can be used only when caster is a party leader, cannot be used if not in a party.",
          "levelDetails": [],
          "fixedCastTime": "2 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "1 second",
          "cooldown": "5 seconds",
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
          "iconUrl": "assets/divine-pride/skills/5073.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5073",
          "tree": {
            "idx": 17,
            "row": 2,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2039,
                "level": 1,
                "name": "Ancilla",
                "visible": true
              },
              {
                "id": 2046,
                "level": 5,
                "name": "Oratio",
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
                "label": "Fixed Cast Time",
                "value": "2 seconds"
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
          "id": 2053,
          "imageFile": "2053.png",
          "name": "EXPIATIO / Expiation",
          "maxLevel": 5,
          "prerequisiteText": "Oratio 5 Duple Light 5",
          "group": "Active",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/EXPIATIO_%2F_Expiation",
          "description": "Grants divine power to one's weapon to penetrate armors when physical/magical attacks.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Armor Penetration 5% / Lasts for 150 sec"
            },
            {
              "level": 2,
              "text": "Armor Penetration 10% / Lasts for 180 sec"
            },
            {
              "level": 3,
              "text": "Armor Penetration 15% / Lasts for 210 sec"
            },
            {
              "level": 4,
              "text": "Armor Penetration 20% / Lasts for 240 sec"
            },
            {
              "level": 5,
              "text": "Armor Penetration 25% / Lasts for 270 sec"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "0 seconds",
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
                  "value": "150000"
                },
                {
                  "level": 2,
                  "value": "180000"
                },
                {
                  "level": 3,
                  "value": "210000"
                },
                {
                  "level": 4,
                  "value": "240000"
                },
                {
                  "level": 5,
                  "value": "270000"
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
          "iconUrl": "assets/divine-pride/skills/2053.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2053",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2046,
                "level": 5,
                "name": "Oratio",
                "visible": true
              },
              {
                "id": 2054,
                "level": 5,
                "name": "Duple Light",
                "visible": true
              }
            ]
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Armor Penetration 5% / Lasts for 150 sec",
                      "sp-cost": "35",
                      "range": "11 cells",
                      "data-1": "150000",
                      "data-2": "5",
                      "data-3": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Armor Penetration 10% / Lasts for 180 sec",
                      "sp-cost": "40",
                      "range": "11 cells",
                      "data-1": "180000",
                      "data-2": "10",
                      "data-3": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Armor Penetration 15% / Lasts for 210 sec",
                      "sp-cost": "45",
                      "range": "11 cells",
                      "data-1": "210000",
                      "data-2": "15",
                      "data-3": "15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Armor Penetration 20% / Lasts for 240 sec",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-1": "240000",
                      "data-2": "20",
                      "data-3": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Armor Penetration 25% / Lasts for 270 sec",
                      "sp-cost": "55",
                      "range": "11 cells",
                      "data-1": "270000",
                      "data-2": "25",
                      "data-3": "25"
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
          "id": 2052,
          "imageFile": "2052.png",
          "name": "CLEARANCE / Removal",
          "maxLevel": 5,
          "prerequisiteText": "Laudaramus 2",
          "group": "Special",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/CLEARANCE_%2F_Removal",
          "description": "Remove all party members and monsters' buffs, debuffs, and status effects.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Success Rate 68%"
            },
            {
              "level": 2,
              "text": "Success Rate 76%"
            },
            {
              "level": 3,
              "text": "Success Rate 84%"
            },
            {
              "level": 4,
              "text": "Success Rate 92%"
            },
            {
              "level": 5,
              "text": "Success Rate 100%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "4 seconds",
          "castDelay": "0 seconds",
          "cooldown": "10 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "54"
                },
                {
                  "level": 2,
                  "value": "60"
                },
                {
                  "level": 3,
                  "value": "66"
                },
                {
                  "level": 4,
                  "value": "72"
                },
                {
                  "level": 5,
                  "value": "78"
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
                  "value": "68"
                },
                {
                  "level": 2,
                  "value": "76"
                },
                {
                  "level": 3,
                  "value": "84"
                },
                {
                  "level": 4,
                  "value": "92"
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
          "iconUrl": "assets/divine-pride/skills/2052.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2052",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2048,
                "level": 2,
                "name": "Lauda Ramus",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Special Skill"
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
                "value": "4 seconds"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Success Rate 68%",
                      "sp-cost": "54",
                      "range": "11 cells",
                      "data-1": "68"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Success Rate 76%",
                      "sp-cost": "60",
                      "range": "11 cells",
                      "data-1": "76"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Success Rate 84%",
                      "sp-cost": "66",
                      "range": "11 cells",
                      "data-1": "84"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Success Rate 92%",
                      "sp-cost": "72",
                      "range": "11 cells",
                      "data-1": "92"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Success Rate 100%",
                      "sp-cost": "78",
                      "range": "11 cells",
                      "data-1": "100"
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
          "id": 5011,
          "imageFile": "5011.png",
          "name": "Offertorium",
          "maxLevel": 5,
          "prerequisiteText": "Highness Heal 2",
          "group": "",
          "type": "Active / Buff",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Offertorium",
          "description": "Increases the efficiency of High Heal, Coluseo Heal, Sanctuary, and Heal. This skill cannot be used in conjunction with Magnificat.\nCures status : Darkness, Curse, Poison, Delusion, Chaos, Bleeding, fire, Ice, Mandragora Howling, Guillotine Cross poison",
          "levelDetails": [
            {
              "level": 1,
              "text": "90 seconds / Healing Power +30% / SP Cost 220%"
            },
            {
              "level": 2,
              "text": "90 seconds / Healing Power +60% / SP Cost 240%"
            },
            {
              "level": 3,
              "text": "90 seconds / Healing Power +90% / SP Cost 260%"
            },
            {
              "level": 4,
              "text": "90 seconds / Healing Power +120% / SP Cost 280%"
            },
            {
              "level": 5,
              "text": "90 seconds / Healing Power +150% / SP Cost 300%"
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
            },
            {
              "label": "Data 2",
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
          "spCost": "(Skill Level × 30)",
          "duration": "90 seconds",
          "translations": {
            "pt-BR": {
              "name": " Offertorium ",
              "description": "Inicia um ritual de oferta.\nRemove alguns efeitos negativos e aumenta a efetividade de cura.\nEntretanto, consome mais SP ao usar habilidades .",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Offertorium"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5011.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5011",
          "tree": {
            "idx": 22,
            "row": 3,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 2051,
                "level": 2,
                "name": "High Heal",
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
                "label": "SP Cost",
                "value": "(Skill Level × 30)"
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
                    "id": "90-seconds-healing-power",
                    "label": "90 Seconds / Healing Power"
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
                      "90-seconds-healing-power": "+30%",
                      "effect": "SP Cost 220%",
                      "sp-cost": "30",
                      "data-1": "130",
                      "data-2": "220",
                      "data-3": "90000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "90-seconds-healing-power": "+60%",
                      "effect": "SP Cost 240%",
                      "sp-cost": "60",
                      "data-1": "160",
                      "data-2": "240",
                      "data-3": "90000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "90-seconds-healing-power": "+90%",
                      "effect": "SP Cost 260%",
                      "sp-cost": "90",
                      "data-1": "190",
                      "data-2": "260",
                      "data-3": "90000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "90-seconds-healing-power": "+120%",
                      "effect": "SP Cost 280%",
                      "sp-cost": "120",
                      "data-1": "220",
                      "data-2": "280",
                      "data-3": "90000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "90-seconds-healing-power": "+150%",
                      "effect": "SP Cost 300%",
                      "sp-cost": "150",
                      "data-1": "250",
                      "data-2": "300",
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
          "id": 2044,
          "imageFile": "2044.png",
          "name": "Epiclesis",
          "maxLevel": 5,
          "prerequisiteText": "Ancilla 1,",
          "group": "Summon",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Epiclesis",
          "description": "Summon the Tree of Life that\nrevives any dead characters within 5x5 cell range of the tree, while increasing MaxHP and recovering HP and SP. Consumes 1 Ancilla and 1 Holy Water.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MaxHP +5% Recover 3% HP per 3 sec.\nSP Recovery by 2 %"
            },
            {
              "level": 2,
              "text": "MaxHP +10% Recover 3% HP per 3 sec.\nSP Recovery by 2 %"
            },
            {
              "level": 3,
              "text": "MaxHP +15% Recover 4 % HP per 3 sec.\nSP Recovery by 3 %"
            },
            {
              "level": 4,
              "text": "MaxHP +20% Recover 4 % HP per 3 sec.\nSP Recovery by 3 %"
            },
            {
              "level": 5,
              "text": "MaxHP +25% Recover 5 % HP per 3 sec.\nSP Recovery by 4 %"
            }
          ],
          "fixedCastTime": "2 seconds",
          "castDelay": "2 seconds",
          "cooldown": "60 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
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
                  "value": "18000"
                },
                {
                  "level": 2,
                  "value": "21000"
                },
                {
                  "level": 3,
                  "value": "24000"
                },
                {
                  "level": 4,
                  "value": "27000"
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
              "label": "Data 4",
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
          "spCost": "300",
          "variableCastTime": "[1.5 + (Skill Level x 0.5)] seconds",
          "duration": "[15 + (Skill Level × 3)] seconds",
          "castRange": "11 cells",
          "areaOfEffect": "5 x 5",
          "translations": {
            "pt-BR": {
              "name": " Epiclesis ",
              "description": "Recria a sagrada árvore da vida.\nRevive personagens, aumenta o HP e regenera HP e SP a cada 3 segundos.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Epiclesis"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2044.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2044",
          "tree": {
            "idx": 23,
            "row": 3,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2039,
                "level": 1,
                "name": "Ancilla",
                "visible": true
              },
              {
                "id": 2051,
                "level": 1,
                "name": "High Heal",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Summon Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "300"
              },
              {
                "label": "Fixed Cast Time",
                "value": "2 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "[1.5 + (Skill Level x 0.5)] seconds"
              },
              {
                "label": "Cast Delay",
                "value": "2 seconds"
              },
              {
                "label": "Cooldown",
                "value": "60 seconds"
              },
              {
                "label": "Cast Range",
                "value": "11 cells"
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
                "value": "[15 + (Skill Level × 3)] seconds"
              }
            ],
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
                      "effect": "Ma x HP +5% Recover 3% HP per 3 sec\nSP Recovery by 2%",
                      "sp-cost": "300",
                      "range": "11 cells",
                      "atk": "100",
                      "data-1": "18000",
                      "data-2": "3",
                      "data-3": "2",
                      "data-4": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Ma x HP +10% Recover 3% HP per 3 sec\nSP Recovery by 2%",
                      "sp-cost": "300",
                      "range": "11 cells",
                      "atk": "100",
                      "data-1": "21000",
                      "data-2": "3",
                      "data-3": "2",
                      "data-4": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Ma x HP +15% Recover 4% HP per 3 sec\nSP Recovery by 3%",
                      "sp-cost": "300",
                      "range": "11 cells",
                      "atk": "100",
                      "data-1": "24000",
                      "data-2": "4",
                      "data-3": "3",
                      "data-4": "15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Ma x HP +20% Recover 4% HP per 3 sec\nSP Recovery by 3%",
                      "sp-cost": "300",
                      "range": "11 cells",
                      "atk": "100",
                      "data-1": "27000",
                      "data-2": "4",
                      "data-3": "3",
                      "data-4": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Ma x HP +25% Recover 5% HP per 3 sec\nSP Recovery by 4%",
                      "sp-cost": "300",
                      "range": "11 cells",
                      "atk": "100",
                      "data-1": "30000",
                      "data-2": "5",
                      "data-3": "4",
                      "data-4": "25"
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
          "id": 2057,
          "imageFile": "2057.png",
          "name": "Silentium",
          "maxLevel": 5,
          "prerequisiteText": "Clearance 1",
          "group": "Debuff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Silentium",
          "description": "Cast Lex Divina to the target\nwithin the certain range from the caster.",
          "levelDetails": [
            {
              "level": 1,
              "text": "64 SP / 9x9 Range"
            },
            {
              "level": 2,
              "text": "68 SP / 11x11 Range"
            },
            {
              "level": 3,
              "text": "72 SP / 13x13 Range"
            },
            {
              "level": 4,
              "text": "76 SP / 15x15 Range"
            },
            {
              "level": 5,
              "text": "80 SP / 17x17 Range"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "4 seconds",
          "castDelay": "0 seconds",
          "cooldown": "15 seconds",
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
                  "value": "68"
                },
                {
                  "level": 3,
                  "value": "72"
                },
                {
                  "level": 4,
                  "value": "76"
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
                  "value": "4 cells"
                },
                {
                  "level": 2,
                  "value": "5 cells"
                },
                {
                  "level": 3,
                  "value": "6 cells"
                },
                {
                  "level": 4,
                  "value": "7 cells"
                },
                {
                  "level": 5,
                  "value": "8 cells"
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
            }
          ],
          "spCost": "20 + (Skill Level × 4)",
          "duration": "[10 + (Skill Level × 10)] seconds",
          "areaOfEffect": "9 x 9 ~ 17 x 17",
          "translations": {
            "pt-BR": {
              "name": " Silentium ",
              "description": "Recita uma oração em latim.\nConcede a chance de infligir Silêncio em oponentes ao seu redor.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Silentium"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2057.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2057",
          "tree": {
            "idx": 26,
            "row": 3,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2052,
                "level": 1,
                "name": "Clearance",
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
                "label": "SP Cost",
                "value": "20 + (Skill Level × 4)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
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
                "value": "15 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "9 x 9 ~ 17 x 17"
              },
              {
                "label": "Duration",
                "value": "[10 + (Skill Level × 10)] seconds"
              }
            ],
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
                      "effect": "64 SP / 9 x 9 Range",
                      "sp-cost": "64",
                      "range": "4 cells",
                      "data-1": "20000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "68 SP / 11 x 11 Range",
                      "sp-cost": "68",
                      "range": "5 cells",
                      "data-1": "30000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "72 SP / 13 x 13 Range",
                      "sp-cost": "72",
                      "range": "6 cells",
                      "data-1": "40000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "76 SP / 15 x 15 Range",
                      "sp-cost": "76",
                      "range": "7 cells",
                      "data-1": "50000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "80 SP / 17 x 17 Range",
                      "sp-cost": "80",
                      "range": "8 cells",
                      "data-1": "60000"
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
          "id": 5072,
          "imageFile": "5072.png",
          "name": "VITUPERATUM / Criticism",
          "maxLevel": 5,
          "prerequisiteText": "Epiclesis 1, Expiatio 1",
          "group": "Support",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/VITUPERATUM_%2F_Criticism",
          "description": "Doubles the damage of the next incoming attack on everyone around the target. Consumes 1 Blue Gemstone.\nThe cast time and SP consumption decrease per skill level.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Splash Range 3"
            },
            {
              "level": 2,
              "text": "Splash Range 3"
            },
            {
              "level": 3,
              "text": "Splash Range 3"
            },
            {
              "level": 4,
              "text": "Splash Range 5"
            },
            {
              "level": 5,
              "text": "Splash Range 5"
            }
          ],
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "5 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "144"
                },
                {
                  "level": 2,
                  "value": "120"
                },
                {
                  "level": 3,
                  "value": "106"
                },
                {
                  "level": 4,
                  "value": "92"
                },
                {
                  "level": 5,
                  "value": "78"
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
                  "value": "5"
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
          "iconUrl": "assets/divine-pride/skills/5072.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5072",
          "tree": {
            "idx": 30,
            "row": 4,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2044,
                "level": 1,
                "name": "Epiclesis",
                "visible": true
              },
              {
                "id": 2053,
                "level": 1,
                "name": "Expiatio",
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
                "value": "5"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Splash Range 3",
                      "sp-cost": "144",
                      "range": "11 cells",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Splash Range 3",
                      "sp-cost": "120",
                      "range": "11 cells",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Splash Range 3",
                      "sp-cost": "106",
                      "range": "11 cells",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Splash Range 5",
                      "sp-cost": "92",
                      "range": "11 cells",
                      "data-1": "5"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Splash Range 5",
                      "sp-cost": "78",
                      "range": "11 cells",
                      "data-1": "5"
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
          "id": 2515,
          "imageFile": "2515.png",
          "name": "Sacrament",
          "maxLevel": 5,
          "prerequisiteText": "Epiclesis 1 / Expiatio 1",
          "group": "Buff",
          "type": "",
          "target": "Self and Player",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Sacrament",
          "description": "Reduces a target's fixed cast time by performing a holy ceremony.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Decrease fixed cast by 10% / Duration 60 sec."
            },
            {
              "level": 2,
              "text": "Decrease fixed cast by 20% / Duration 90 sec."
            },
            {
              "level": 3,
              "text": "Decrease fixed cast by 30% / Duration 120 sec."
            },
            {
              "level": 4,
              "text": "Decrease fixed cast by 40% / Duration 150 sec."
            },
            {
              "level": 5,
              "text": "Decrease fixed cast by 50% / Duration 180 sec."
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0.5 seconds",
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
          "spCost": "80 + (Skill Level × 20)",
          "duration": "[30 + (Skill Level × 30)] seconds",
          "castRange": "11 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2515.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2515",
          "tree": {
            "idx": 32,
            "row": 4,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2044,
                "level": 1,
                "name": "Epiclesis",
                "visible": true
              },
              {
                "id": 2053,
                "level": 1,
                "name": "Expiatio",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Buff Skill"
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
                "value": "0.5 seconds"
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
                "value": "Self and Player"
              }
            ],
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
                      "effect": "Decrease fi x ed cast by 10%",
                      "sp-cost": "100",
                      "range": "11 cells",
                      "data-1": "60000",
                      "data-2": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "90 seconds",
                      "effect": "Decrease fi x ed cast by 20%",
                      "sp-cost": "120",
                      "range": "11 cells",
                      "data-1": "90000",
                      "data-2": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "120 seconds",
                      "effect": "Decrease fi x ed cast by 30%",
                      "sp-cost": "140",
                      "range": "11 cells",
                      "data-1": "120000",
                      "data-2": "30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "150 seconds",
                      "effect": "Decrease fi x ed cast by 40%",
                      "sp-cost": "160",
                      "range": "11 cells",
                      "data-1": "150000",
                      "data-2": "40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "180 seconds",
                      "effect": "Decrease fi x ed cast by 50%",
                      "sp-cost": "180",
                      "range": "11 cells",
                      "data-1": "180000",
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
      "label": "High Priest",
      "pointLimit": 69,
      "tree": {
        "columns": 7,
        "rows": 4
      },
      "skills": [
        {
          "id": 73,
          "imageFile": "73.png",
          "name": "Kyrie Eleison",
          "maxLevel": 10,
          "prerequisiteText": "Angelus 2",
          "group": "Active",
          "type": "Buff",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Kyrie_Eleison",
          "description": "Creates a protective barrier on a single target that blocks every form of physical damage until its durability wears off or expires. Its durability is a portion of the target's MaxHP.\nlevel of this skill Maximize the number of hits blocked per skill point used\nHoly Light will immediately cancel the barrier on the targeted player.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Durability: MaxHP 12%, Up to 5 Hits Blocked"
            },
            {
              "level": 2,
              "text": "Durability: MaxHP 14%, Up to 6 Hits Blocked"
            },
            {
              "level": 3,
              "text": "Durability: MaxHP 16%, Up to 6 Hits Blocked"
            },
            {
              "level": 4,
              "text": "Durability: MaxHP 18%, Up to 7 Hits Blocked"
            },
            {
              "level": 5,
              "text": "Durability: MaxHP 20%, Up to 7 Hits Blocked"
            },
            {
              "level": 6,
              "text": "Durability: MaxHP 22%, Up to 8 Hits Blocked"
            },
            {
              "level": 7,
              "text": "Durability: MaxHP 24%, Up to 8 Hits Blocked"
            },
            {
              "level": 8,
              "text": "Durability: MaxHP 26%, Up to 9 Hits Blocked"
            },
            {
              "level": 9,
              "text": "Durability: MaxHP 28%, Up to 9 Hits Blocked"
            },
            {
              "level": 10,
              "text": "Durability: MaxHP 30%, Up to 10 Hits Blocked"
            }
          ],
          "fixedCastTime": "0.4 seconds",
          "variableCastTime": "1.6 seconds",
          "castDelay": "2 seconds",
          "cooldown": "1 second",
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
                  "value": "35"
                }
              ]
            }
          ],
          "spCost": "20~35",
          "duration": "2 minutes",
          "castRange": "9 cells",
          "translations": {
            "pt-BR": {
              "name": " Kyrie Eleison ",
              "description": "Envolve o alvo em uma barreira que bloqueia danos físicos.\nO efeito termina quando a duração acabar, ao atingir o limite de bloqueios ou quando a barreira sofrer dano baseado no HP máximo do personagem.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Kyrie_Eleison"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/73.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/73",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 33,
                "level": 2,
                "name": "Angelus",
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
                "label": "SP Cost",
                "value": "20~35"
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
                "value": "2 seconds"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Durability: Ma x HP 12%, Up to 5 Hits Blocked",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Durability: Ma x HP 14%, Up to 6 Hits Blocked",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Durability: Ma x HP 16%, Up to 6 Hits Blocked",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Durability: Ma x HP 18%, Up to 7 Hits Blocked",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Durability: Ma x HP 20%, Up to 7 Hits Blocked",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Durability: Ma x HP 22%, Up to 8 Hits Blocked",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Durability: Ma x HP 24%, Up to 8 Hits Blocked",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Durability: Ma x HP 26%, Up to 9 Hits Blocked",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Durability: Ma x HP 28%, Up to 9 Hits Blocked",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Durability: Ma x HP 30%, Up to 10 Hits Blocked",
                      "sp-cost": "35"
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
          "id": 74,
          "imageFile": "74.png",
          "name": "Magnificat",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Buff",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Magnificat",
          "description": "Consumes SP40 and temporarily doubles the SP Recovery rate of the user and party members.",
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
            }
          ],
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
            }
          ],
          "spCost": "40",
          "fixedCastTime": "0.8 seconds",
          "variableCastTime": "3.2 seconds",
          "castDelay": "2 seconds",
          "duration": "15 + (Skill Level × 15) seconds",
          "translations": {
            "pt-BR": {
              "name": " Magnificat ",
              "description": "Duplica a velocidade de regeneração natural de SP para todos do grupo .\nConcentrar · Olhos de Águia · Olhos de Coruja\nAumentar Capacidade de Carga · Comércio · Desconto · Identificar Item · Mammonita · Superfaturar · Usar Carrinho",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Magnificat"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/74.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/74",
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
                "value": "0.8 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "3.2 seconds"
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
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "45 seconds",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "60 seconds",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "75 seconds",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "90 seconds",
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
          "id": 72,
          "imageFile": "72.png",
          "name": "Recovery",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Supportive",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Recovery",
          "description": "Consumes SP 5 and cures a single target from the following status effects: Frozen, Stone and Stun.\nAgainst Undead property monsters, this skill will leave it [Abnormal Status : blind].",
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
          "castDelay": "2 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/72.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/72",
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
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "5"
              },
              {
                "label": "Cast Delay",
                "value": "2 seconds"
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
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Increase_SP_Recovery",
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
                      "effect": "(3 + 0.2% of Ma x SP)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(6 + 0.4% of Ma x SP)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(9 + 0.6% of Ma x SP)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(12 + 0.8% of Ma x SP)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(15 + 1.0% of Ma x SP)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(18 + 1.2% of Ma x SP)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(21 + 1.4% of Ma x SP)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(24 + 1.6% of Ma x SP)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(27 + 1.8% of Ma x SP)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(30 + 2.0% of Ma x SP)",
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
          "id": 76,
          "imageFile": "76.png",
          "name": "Lex Divina",
          "maxLevel": 10,
          "prerequisiteText": "Ruwach 1",
          "group": "Active",
          "type": "Debuff",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Lex_Divina",
          "description": "Attempts to [Abnormal Status : silence] a single target.\nDuration can be decreased upon status of the target.\nIf the target is already silenced, this skill will cure it from the forementioned effect.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Silence Duration: 30sec, SP Cost: 20"
            },
            {
              "level": 2,
              "text": "Silence Duration: 35sec, SP Cost: 20"
            },
            {
              "level": 3,
              "text": "Silence Duration: 40sec, SP Cost: 20"
            },
            {
              "level": 4,
              "text": "Silence Duration: 45sec, SP Cost: 20"
            },
            {
              "level": 5,
              "text": "Silence Duration: 50sec, SP Cost: 20"
            },
            {
              "level": 6,
              "text": "Silence Duration: 60sec, SP Cost: 18"
            },
            {
              "level": 7,
              "text": "Silence Duration: 60sec, SP Cost: 16"
            },
            {
              "level": 8,
              "text": "Silence Duration: 60sec, SP Cost: 14"
            },
            {
              "level": 9,
              "text": "Silence Duration: 60sec, SP Cost: 12"
            },
            {
              "level": 10,
              "text": "Silence Duration: 60sec, SP Cost: 10"
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
                  "value": "18"
                },
                {
                  "level": 7,
                  "value": "16"
                },
                {
                  "level": 8,
                  "value": "14"
                },
                {
                  "level": 9,
                  "value": "12"
                },
                {
                  "level": 10,
                  "value": "10"
                }
              ]
            }
          ],
          "spCost": "20~10",
          "castDelay": "3 seconds",
          "duration": "30~60 seconds",
          "translations": {
            "pt-BR": {
              "name": " Lex Divina ",
              "description": "Evoca a lei divina, concedendo a chance de infligir silêncio no alvo.\nChance = {100 - [VIT do alvo + (SOR do alvo ÷ 8)] + (INT do usuário ÷ 15)}%",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Lex_Divina"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/76.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/76",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 24,
                "level": 1,
                "name": "Ruwach",
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
                "label": "SP Cost",
                "value": "20~10"
              },
              {
                "label": "Cast Delay",
                "value": "3 seconds"
              },
              {
                "label": "Target",
                "value": "1 Target"
              },
              {
                "label": "Duration",
                "value": "30~60 seconds"
              }
            ],
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
                      "effect": "Silence Duration: 30sec, SP Cost: 20",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Silence Duration: 35sec, SP Cost: 20",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Silence Duration: 40sec, SP Cost: 20",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Silence Duration: 45sec, SP Cost: 20",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Silence Duration: 50sec, SP Cost: 20",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Silence Duration: 60sec, SP Cost: 18",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Silence Duration: 60sec, SP Cost: 16",
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Silence Duration: 60sec, SP Cost: 14",
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Silence Duration: 60sec, SP Cost: 12",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Silence Duration: 60sec, SP Cost: 10",
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
          "id": 66,
          "imageFile": "66.png",
          "name": "Impositio Manus",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Buff",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Impositio_Manus",
          "description": "Blesses a single target's weapon to increase its attack power for one minute.\nIncrease ATK, MATK on the user and all party members around the user for 120s.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK/MATK + 5"
            },
            {
              "level": 2,
              "text": "ATK/MATK +10"
            },
            {
              "level": 3,
              "text": "ATK/MATK +15"
            },
            {
              "level": 4,
              "text": "ATK/MATK +20"
            },
            {
              "level": 5,
              "text": "ATK/MATK +25"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "30 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "59"
                },
                {
                  "level": 2,
                  "value": "62"
                },
                {
                  "level": 3,
                  "value": "65"
                },
                {
                  "level": 4,
                  "value": "68"
                },
                {
                  "level": 5,
                  "value": "71"
                }
              ]
            }
          ],
          "spCost": "56 + (Skill Level × 3)",
          "duration": "120 seconds",
          "castRange": "9 cells",
          "translations": {
            "pt-BR": {
              "name": " Impositio Manus ",
              "description": "Impõe a mão sobre todos do grupo na tela do usuário.\nGarante um bônus no ATQ e o ATQM por 2 minutos.\nConcentrar · Olhos de Águia · Olhos de Coruja",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Impositio_Manus"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/66.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/66",
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
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "56 + (Skill Level × 3)"
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
                "value": "1 second"
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
                "value": "Caster Only"
              },
              {
                "label": "Duration",
                "value": "120 seconds"
              }
            ],
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
                    "id": "matk",
                    "label": "Matk"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "atk": "+ 5",
                      "matk": "+ 5",
                      "sp-cost": "59"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "atk": "+10",
                      "matk": "+10",
                      "sp-cost": "62"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "atk": "+15",
                      "matk": "+15",
                      "sp-cost": "65"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "atk": "+20",
                      "matk": "+20",
                      "sp-cost": "68"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "atk": "+25",
                      "matk": "+25",
                      "sp-cost": "71"
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
          "id": 70,
          "imageFile": "70.png",
          "name": "Sanctuary",
          "maxLevel": 10,
          "prerequisiteText": "Heal 1",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Sanctuary",
          "description": "Each cast consumes a Blue Gemstone.\nCreates a soothing area on a targeted location that will restore HP of all entities within the area of effect every second. SKill level affects healing Value and Target Limit.\nAgainst Undead property and Demon race monsters, this skill will inflict Holy property damage equal to half of the healing value and push them 2 cells backwards.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Target Limit: 4, Healing Value:100, Duration: 4sec"
            },
            {
              "level": 2,
              "text": "Target Limit: 5, Healing Value:200, Duration: 7sec"
            },
            {
              "level": 3,
              "text": "Target Limit: 6, Healing Value:300, Duration:10sec"
            },
            {
              "level": 4,
              "text": "Target Limit: 7, Healing Value:400, Duration:13sec"
            },
            {
              "level": 5,
              "text": "Target Limit: 8, Healing Value:500, Duration:16sec"
            },
            {
              "level": 6,
              "text": "Target Limit: 9, Healing Value:600, Duration:19sec"
            },
            {
              "level": 7,
              "text": "Target Limit:10, Healing Value:777, Duration:22sec"
            },
            {
              "level": 8,
              "text": "Target Limit:11, Healing Value:777, Duration:25sec"
            },
            {
              "level": 9,
              "text": "Target Limit:12, Healing Value:777, Duration:28sec"
            },
            {
              "level": 10,
              "text": "Target Limit:13, Healing Value:777, Duration:31sec"
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
          "spCost": "12 + (Skill Level × 3)",
          "fixedCastTime": "1 second",
          "variableCastTime": "4 seconds",
          "duration": "[1 + (Skill Level × 3)] seconds",
          "castRange": "Magic",
          "areaOfEffect": "5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/70.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/70",
          "tree": {
            "idx": 6,
            "row": 0,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 28,
                "level": 1,
                "name": "Heal",
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
                "label": "SP Cost",
                "value": "12 + (Skill Level × 3)"
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
              }
            ],
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
                      "duration": "4 seconds",
                      "effect": "Target Limit: 4, Healing Value:100",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "7 seconds",
                      "effect": "Target Limit: 5, Healing Value:200",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "Target Limit: 6, Healing Value:300",
                      "sp-cost": "21"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "13 seconds",
                      "effect": "Target Limit: 7, Healing Value:400",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "16 seconds",
                      "effect": "Target Limit: 8, Healing Value:500",
                      "sp-cost": "27"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "19 seconds",
                      "effect": "Target Limit: 9, Healing Value:600",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "22 seconds",
                      "effect": "Target Limit:10, Healing Value:777",
                      "sp-cost": "33"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "25 seconds",
                      "effect": "Target Limit:11, Healing Value:777",
                      "sp-cost": "36"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "28 seconds",
                      "effect": "Target Limit:12, Healing Value:777",
                      "sp-cost": "39"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "31 seconds",
                      "effect": "Target Limit:13, Healing Value:777",
                      "sp-cost": "42"
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
          "id": 75,
          "imageFile": "75.png",
          "name": "Gloria",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Buff",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Gloria",
          "description": "Consumes SP20 and temporarily boosts LUK by 30 to the user and party members.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 10sec"
            },
            {
              "level": 2,
              "text": "Duration: 15sec"
            },
            {
              "level": 3,
              "text": "Duration: 20sec"
            },
            {
              "level": 4,
              "text": "Duration: 25sec"
            },
            {
              "level": 5,
              "text": "Duration: 30sec"
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
          "castDelay": "2 seconds",
          "duration": "[5 + (Skill Level × 5)] seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/75.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/75",
          "tree": {
            "idx": 7,
            "row": 1,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 73,
                "level": 4,
                "name": "Kyrie Eleison",
                "visible": true
              },
              {
                "id": 74,
                "level": 3,
                "name": "Magnificat",
                "visible": true
              }
            ]
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
                "label": "Cast Delay",
                "value": "2 seconds"
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
                    "id": "duration",
                    "label": "Duration"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "10 seconds",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "15 seconds",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "20 seconds",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "25 seconds",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "30 seconds",
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
          "id": 71,
          "imageFile": "71.png",
          "name": "Slow Poison",
          "maxLevel": 4,
          "prerequisiteText": "basic skill",
          "group": "Supportive",
          "type": "",
          "target": "Player",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Slow_Poison",
          "description": "Stops the HP drain from the Poison status effect that affects a single target.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "6"
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
                  "value": "12"
                }
              ]
            }
          ],
          "spCost": "4 + (Skill Level × 2)",
          "duration": "(Skill Level × 10) seconds",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/71.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/71",
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
                "value": "Supportive Skill"
              },
              {
                "label": "Levels",
                "value": "4"
              },
              {
                "label": "SP Cost",
                "value": "4 + (Skill Level × 2)"
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
                "value": "(Skill Level × 10) seconds"
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
                      "sp-cost": "6"
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
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 4,
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
          "id": 54,
          "imageFile": "54.png",
          "name": "Resurrection",
          "maxLevel": 4,
          "prerequisiteText": "Imporves SP recovery 4, Recovery 1",
          "group": "Active",
          "type": "Recovery",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Resurrection",
          "description": "Each cast consumes a Blue Gemstone. Returns a single dead player to life.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Revival to HP 10% Recovery"
            },
            {
              "level": 2,
              "text": "Revival to HP 30% Recovery"
            },
            {
              "level": 3,
              "text": "Revival to HP 50% Recovery"
            },
            {
              "level": 4,
              "text": "Revival to HP 80% Recovery"
            }
          ],
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
                }
              ]
            }
          ],
          "spCost": "60",
          "fixedCastTime": "[1.6 − (Skill Level × 0.4)] seconds",
          "variableCastTime": "[6.4 − (Skill Level × 1.6)] seconds",
          "castDelay": "(Skill Level − 1) seconds",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/54.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/54",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 9,
                "level": 4,
                "name": "Increase SP Recovery",
                "visible": true
              },
              {
                "id": 72,
                "level": 1,
                "name": "Status Recovery",
                "visible": true
              }
            ]
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
                "value": "60"
              },
              {
                "label": "Fixed Cast Time",
                "value": "[1.6 − (Skill Level × 0.4)] seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "[6.4 − (Skill Level × 1.6)] seconds"
              },
              {
                "label": "Cast Delay",
                "value": "(Skill Level − 1) seconds"
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
                      "effect": "Revival to HP 10% Recovery",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Revival to HP 30% Recovery",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Revival to HP 50% Recovery",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Revival to HP 80% Recovery",
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
          "id": 361,
          "imageFile": "361.png",
          "name": "Assumptio",
          "maxLevel": 5,
          "prerequisiteText": "Angelus 1, Improved SP Recovery 3, Impositio Manus 3",
          "group": "Active",
          "type": "Buff",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Assumptio",
          "description": "Places a temporary buff on a single target that doubles their Hard Defense and Hard Magic Defense.",
          "levelDetails": [
            {
              "level": 1,
              "text": "DEF + 50, Received heal amount + 2%, Duration 20sec"
            },
            {
              "level": 2,
              "text": "DEF +100, Received heal amount + 4%, Duration 40sec"
            },
            {
              "level": 3,
              "text": "DEF +150, Received heal amount + 6%, Duration 60sec"
            },
            {
              "level": 4,
              "text": "DEF +200, Received heal amount + 8%, Duration 80sec"
            },
            {
              "level": 5,
              "text": "DEF +250, Received heal amount +10%, Duration 100sec"
            }
          ],
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
          "spCost": "10 + (Skill Level × 10)",
          "fixedCastTime": "[0.1 + (Skill Level × 0.1)] seconds",
          "variableCastTime": "[0.4 + (Skill Level × 0.4)] seconds",
          "castDelay": "0.5 seconds",
          "duration": "(Skill Level × 20) seconds",
          "castRange": "9 cells",
          "translations": {
            "pt-BR": {
              "name": " Assumptio ",
              "description": "Abençoa o alvo, aumentando a DEF e a Cura recebida.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Assumptio"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/361.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/361",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 9,
                "level": 3,
                "name": "Increase SP Recovery",
                "visible": true
              },
              {
                "id": 33,
                "level": 1,
                "name": "Angelus",
                "visible": false
              },
              {
                "id": 66,
                "level": 3,
                "name": "Impositio Manus",
                "visible": true
              }
            ]
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
                "value": "10 + (Skill Level × 10)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "[0.1 + (Skill Level × 0.1)] seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "[0.4 + (Skill Level × 0.4)] seconds"
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
                  },
                  {
                    "id": "def",
                    "label": "Def"
                  },
                  {
                    "id": "received-heal-amount",
                    "label": "Received Heal Amount"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "20 seconds",
                      "def": "+ 50",
                      "received-heal-amount": "+ 2%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "40 seconds",
                      "def": "+100",
                      "received-heal-amount": "+ 4%",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "60 seconds",
                      "def": "+150",
                      "received-heal-amount": "+ 6%",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "80 seconds",
                      "def": "+200",
                      "received-heal-amount": "+ 8%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "100 seconds",
                      "def": "+250",
                      "received-heal-amount": "+10%",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 78,
          "imageFile": "78.png",
          "name": "Lex Aeterna",
          "maxLevel": 1,
          "prerequisiteText": "Lex Divina 5",
          "group": "Active",
          "type": "Debuff",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Lex_Aeterna",
          "description": "Consumes SP10 and weakens a single target so it can take double damage from the next incoming attack.\nCan not be cast on a frozen or petrified target.",
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
          "castDelay": "3 seconds",
          "duration": "Until ne x t damage taken",
          "castRange": "9 cells",
          "translations": {
            "pt-BR": {
              "name": " Lex Aeterna ",
              "description": "Evoca a lei eterna.\nFaz o alvo receber o dobro de dano no próximo ataque.\nApós receber um ataque, o efeito é cancelado.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Lex_Aeterna"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/78.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/78",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 76,
                "level": 5,
                "name": "Lex Divina",
                "visible": true
              }
            ]
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
                "value": "3 seconds"
              },
              {
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "1 Enemy"
              },
              {
                "label": "Duration",
                "value": "Until ne x t damage taken"
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
          "id": 67,
          "imageFile": "67.png",
          "name": "Suffragium",
          "maxLevel": 3,
          "prerequisiteText": "Impositio Manus 2",
          "group": "Active",
          "type": "Buff",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Suffragium",
          "description": "Blesses for another person.\nDecrease variable casting on the user and all party members around the user for 60s.",
          "levelDetails": [
            {
              "level": 1,
              "text": "10% reduction in variable casting"
            },
            {
              "level": 2,
              "text": "15% reduction in variable casting"
            },
            {
              "level": 3,
              "text": "20% reduction in variable casting"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "30 seconds",
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
                }
              ]
            }
          ],
          "spCost": "33 + (Skill Level x 12)",
          "duration": "60 seconds",
          "areaOfEffect": "14 x 14",
          "translations": {
            "pt-BR": {
              "name": " Suffragium ",
              "description": "Reduz o tempo de conjuração variável do usuário e membros do grupo da tela do usuário.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Suffragium"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/67.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/67",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 66,
                "level": 2,
                "name": "Impositio Manus",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "3"
              },
              {
                "label": "SP Cost",
                "value": "33 + (Skill Level x 12)"
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
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "30 seconds"
              },
              {
                "label": "Target",
                "value": "Caster Only"
              },
              {
                "label": "Area of Effect",
                "value": "14 x 14"
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
                      "effect": "10% reduction in variable casting",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "15% reduction in variable casting",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "20% reduction in variable casting",
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
          "id": 68,
          "imageFile": "68.png",
          "name": "Aspersio",
          "maxLevel": 5,
          "prerequisiteText": "Aqua Benedicta 1, Impositio Manus 3",
          "group": "Active",
          "type": "Buff",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Aspersio",
          "description": "Consumes 1 Holy Water.\nEndows a single target's weapon with the Holy property temporarily.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 60sec"
            },
            {
              "level": 2,
              "text": "Duration: 90sec"
            },
            {
              "level": 3,
              "text": "Duration:120sec"
            },
            {
              "level": 4,
              "text": "Duration:150sec"
            },
            {
              "level": 5,
              "text": "Duration:180sec"
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
          "spCost": "10 + (Skill Level × 2)",
          "castDelay": "2 seconds",
          "duration": "[30 + (Skill Level × 30)] seconds",
          "castRange": "9 cells",
          "translations": {
            "pt-BR": {
              "name": " Aspersio ",
              "description": "Abençoa a arma com propriedade sagrado temporariamente.\nConcentrar · Olhos de Águia · Olhos de Coruja\nAumentar Capacidade de Carga · Comércio · Desconto · Identificar Item · Mammonita · Superfaturar · Usar Carrinho",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Aspersio"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/68.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/68",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 31,
                "level": 1,
                "name": "Aqua Benedicta",
                "visible": false
              },
              {
                "id": 66,
                "level": 3,
                "name": "Impositio Manus",
                "visible": true
              }
            ]
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
                "value": "2 seconds"
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
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "90 seconds",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "120 seconds",
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "150 seconds",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "180 seconds",
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
          "id": 69,
          "imageFile": "69.png",
          "name": "Benedictio Sanctissimi Sacramenti",
          "maxLevel": 5,
          "prerequisiteText": "Aspersio 5, Gloria 3",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Benedictio_Sanctissimi_Sacramenti",
          "description": "Blesses a targeted location to endow the armor of all players within the area of effect with the Holy property.\nRequires the user to have two Acolyte class players horizontally adjacent to the user.\nActs as Offensive Endowment when used against Undead property and Demon race monsters",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 40sec"
            },
            {
              "level": 2,
              "text": "Duration: 80sec"
            },
            {
              "level": 3,
              "text": "Duration:120sec"
            },
            {
              "level": 4,
              "text": "Duration:160sec"
            },
            {
              "level": 5,
              "text": "Duration:200sec"
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
          "duration": "(Skill Level × 40) seconds",
          "castRange": "9 cells",
          "areaOfEffect": "3 x 3",
          "translations": {
            "pt-BR": {
              "name": " Benedictio Sanctissimi Sacramenti ",
              "description": "Enquanto estiver lado a lado com outros dois Noviços , abençoa a área para encantar a armadura dos membros do grupo com propriedade sagrado .",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Benedictio_Sanctissimi_Sacramenti"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/69.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/69",
          "tree": {
            "idx": 14,
            "row": 2,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 68,
                "level": 5,
                "name": "Aspersio",
                "visible": true
              },
              {
                "id": 75,
                "level": 3,
                "name": "Gloria",
                "visible": true
              }
            ]
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "40 seconds",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "80 seconds",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "120 seconds",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "160 seconds",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "200 seconds",
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
          "id": 65,
          "imageFile": "65.png",
          "name": "Mace Mastery",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Mace_Mastery",
          "description": "Enhances attack (Weapon Mastery) with Mace class weapons, and dmages per skill level are added to the physical damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage +3, CRI + 1"
            },
            {
              "level": 2,
              "text": "Damage +6, CRI + 2"
            },
            {
              "level": 3,
              "text": "Damage +9, CRI + 3"
            },
            {
              "level": 4,
              "text": "Damage +12, CRI + 4"
            },
            {
              "level": 5,
              "text": "Damage +15, CRI + 5"
            },
            {
              "level": 6,
              "text": "Damage +18, CRI + 6"
            },
            {
              "level": 7,
              "text": "Damage +21, CRI + 7"
            },
            {
              "level": 8,
              "text": "Damage +24, CRI + 8"
            },
            {
              "level": 9,
              "text": "Damage +27, CRI + 9"
            },
            {
              "level": 10,
              "text": "Damage +30, CRI +10"
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
          "iconUrl": "assets/divine-pride/skills/65.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/65",
          "tree": {
            "idx": 15,
            "row": 2,
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
                    "id": "cri",
                    "label": "Cri"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "cri": "+ 1",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "cri": "+ 2",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "cri": "+ 3",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "cri": "+ 4",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "cri": "+ 5",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "cri": "+ 6",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "cri": "+ 7",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "cri": "+ 8",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "cri": "+ 9",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "cri": "+10",
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
          "id": 77,
          "imageFile": "77.png",
          "name": "Turn Undead",
          "maxLevel": 10,
          "prerequisiteText": "Resurrection 1, Lex Divina 3",
          "group": "Active",
          "type": "Magic",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Turn_Undead",
          "description": "Consumes SP20 and exorcizes a single target to inflict Holy property piercing damage.\nIf the skill fails, inflicts 30% of MATK damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Success rate: 2%"
            },
            {
              "level": 2,
              "text": "Success rate: 4%"
            },
            {
              "level": 3,
              "text": "Success rate: 6%"
            },
            {
              "level": 4,
              "text": "Success rate: 8%"
            },
            {
              "level": 5,
              "text": "Success rate:10%"
            },
            {
              "level": 6,
              "text": "Success rate:12%"
            },
            {
              "level": 7,
              "text": "Success rate:14%"
            },
            {
              "level": 8,
              "text": "Success rate:16%"
            },
            {
              "level": 9,
              "text": "Success rate:18%"
            },
            {
              "level": 10,
              "text": "Success rate:20%"
            }
          ],
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "0.8 seconds",
          "castDelay": "3 seconds",
          "cooldown": "1.5 seconds",
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
          "spCost": "20",
          "castRange": "5 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/77.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/77",
          "tree": {
            "idx": 16,
            "row": 2,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 54,
                "level": 1,
                "name": "Resurrection",
                "visible": true
              },
              {
                "id": 76,
                "level": 3,
                "name": "Lex Divina",
                "visible": true
              }
            ]
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
                "value": "20"
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
                "value": "3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "1.5 seconds"
              },
              {
                "label": "Cast Range",
                "value": "5 cells"
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
                      "effect": "Success rate: 2%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Success rate: 4%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Success rate: 6%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Success rate: 8%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Success rate:10%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Success rate:12%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Success rate:14%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Success rate:16%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Success rate:18%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Success rate:20%",
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
          "id": 362,
          "imageFile": "362.png",
          "name": "Basilica",
          "maxLevel": 5,
          "prerequisiteText": "Gloria 2, Improved SP Recovery 1, Kyrie Eleison 3",
          "group": "Active",
          "type": "Supportive",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Basilica",
          "description": "Enhances itself by accepting the power of sanctuary temporarily.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Magic damage + 3%, Physical damage + 5%"
            },
            {
              "level": 2,
              "text": "Magic damage + 6%, Physical damage +10%"
            },
            {
              "level": 3,
              "text": "Magic damage + 9%, Physical damage +15%"
            },
            {
              "level": 4,
              "text": "Magic damage +12%, Physical damage +20%"
            },
            {
              "level": 5,
              "text": "Magic damage +15%, Physical damage +25%"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "3 seconds",
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
          "spCost": "30 + (Skill Level x 10)",
          "duration": "30 + (Skill Level x 30) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/362.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/362",
          "tree": {
            "idx": 17,
            "row": 2,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 9,
                "level": 1,
                "name": "Increase SP Recovery",
                "visible": true
              },
              {
                "id": 73,
                "level": 3,
                "name": "Kyrie Eleison",
                "visible": true
              },
              {
                "id": 75,
                "level": 2,
                "name": "Gloria",
                "visible": true
              }
            ]
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
                "value": "30 + (Skill Level x 10)"
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
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "30 seconds"
              },
              {
                "label": "Target",
                "value": "Immediately"
              },
              {
                "label": "Duration",
                "value": "30 + (Skill Level x 30) seconds"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "magic-damage",
                    "label": "Magic Damage"
                  },
                  {
                    "id": "physical-damage",
                    "label": "Physical Damage"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "magic-damage": "+ 3%",
                      "physical-damage": "+ 5%",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "magic-damage": "+ 6%",
                      "physical-damage": "+10%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "magic-damage": "+ 9%",
                      "physical-damage": "+15%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "magic-damage": "+12%",
                      "physical-damage": "+20%",
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "magic-damage": "+15%",
                      "physical-damage": "+25%",
                      "sp-cost": "80"
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
          "id": 363,
          "imageFile": "363.png",
          "name": "Meditatio",
          "maxLevel": 10,
          "prerequisiteText": "Improved SP Recovery 5, Lex Divina 5, Aspersio 3",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Meditatio",
          "description": "Increases the player's Maximum SP and SP regeneration rate.\nIt also increases the amount of HP that is restored using the Heal skill.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MaxSP +1%, SP Regeneration 3% increase"
            },
            {
              "level": 2,
              "text": "MaxSP +2%, SP Regeneration 6% increase"
            },
            {
              "level": 3,
              "text": "MaxSP +3%, SP Regeneration 9% increase"
            },
            {
              "level": 4,
              "text": "MaxSP +4%, SP Regeneration 12% increase"
            },
            {
              "level": 5,
              "text": "MaxSP +5%, SP Regeneration 15% increase"
            },
            {
              "level": 6,
              "text": "MaxSP +6%, SP Regeneration 18% increase"
            },
            {
              "level": 7,
              "text": "MaxSP +7%, SP Regeneration 21% increase"
            },
            {
              "level": 8,
              "text": "MaxSP +8%, SP Regeneration 24% increase"
            },
            {
              "level": 9,
              "text": "MaxSP +9%, SP Regeneration 27% increase"
            },
            {
              "level": 10,
              "text": "MaxSP +10%, SP Regeneration 30% increase"
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
              "name": " Meditatio ",
              "description": "Medita para Deus.\nAcelera a regeneração natural de SP , aumenta o SP e melhora a efetividade de cura.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Meditatio"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/363.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/363",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 9,
                "level": 5,
                "name": "Increase SP Recovery",
                "visible": true
              },
              {
                "id": 68,
                "level": 3,
                "name": "Aspersio",
                "visible": true
              },
              {
                "id": 76,
                "level": 5,
                "name": "Lex Divina",
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
                    "id": "maxsp",
                    "label": "MaxSP"
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
                      "maxsp": "+1%",
                      "effect": "SP Regeneration 3% increase",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "maxsp": "+2%",
                      "effect": "SP Regeneration 6% increase",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "maxsp": "+3%",
                      "effect": "SP Regeneration 9% increase",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "maxsp": "+4%",
                      "effect": "SP Regeneration 12% increase",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "maxsp": "+5%",
                      "effect": "SP Regeneration 15% increase",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "maxsp": "+6%",
                      "effect": "SP Regeneration 18% increase",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "maxsp": "+7%",
                      "effect": "SP Regeneration 21% increase",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "maxsp": "+8%",
                      "effect": "SP Regeneration 24% increase",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "maxsp": "+9%",
                      "effect": "SP Regeneration 27% increase",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "maxsp": "+10%",
                      "effect": "SP Regeneration 30% increase",
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
          "ammunition": "",
          "irowikiUrl": "",
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
            "idx": 20,
            "row": 2,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 68,
                "level": 4,
                "name": "Aspersio",
                "visible": true
              },
              {
                "id": 70,
                "level": 3,
                "name": "Sanctuary",
                "visible": true
              }
            ]
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
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 481,
          "imageFile": "481.png",
          "name": "Spiritual Thrift",
          "maxLevel": 5,
          "prerequisiteText": "Mace Mastery 10,",
          "group": "",
          "type": "Passive Skill",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Spiritual_Thrift",
          "description": "Reduce the amount of SP that is\nconsumed by skills.\nReduction of SP Consumption By Level",
          "levelDetails": [
            {
              "level": 1,
              "text": "4%"
            },
            {
              "level": 2,
              "text": "8%"
            },
            {
              "level": 3,
              "text": "12%"
            },
            {
              "level": 4,
              "text": "16%"
            },
            {
              "level": 5,
              "text": "20%"
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
          "iconUrl": "assets/divine-pride/skills/481.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/481",
          "tree": {
            "idx": 22,
            "row": 3,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 23,
                "level": 10,
                "name": "Demon Bane",
                "visible": false
              },
              {
                "id": 65,
                "level": 10,
                "name": "Mace Mastery",
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
                      "effect": "4%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "8%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "12%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "16%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "20%",
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
          "id": 79,
          "imageFile": "79.png",
          "name": "Magnus Exorcismus",
          "maxLevel": 10,
          "prerequisiteText": "Turn Undead 3, Lex Aeterna 1, Safety Wall 1",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Magnus_Exorcismus",
          "description": "Consumping 1 blue gemstone, makes a big cross.\nEach wave will inflict several hits of 100% Holy property magic damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Number of consecutive hits: 1time, Duration: 4sec"
            },
            {
              "level": 2,
              "text": "Number of consecutive hits: 2times, Duration: 5sec"
            },
            {
              "level": 3,
              "text": "Number of consecutive hits: 3times, Duration: 6sec"
            },
            {
              "level": 4,
              "text": "Number of consecutive hits: 4times, Duration: 7sec"
            },
            {
              "level": 5,
              "text": "Number of consecutive hits: 5times, Duration: 8sec"
            },
            {
              "level": 6,
              "text": "Number of consecutive hits: 6times, Duration: 9sec"
            },
            {
              "level": 7,
              "text": "Number of consecutive hits: 7times, Duration:10sec"
            },
            {
              "level": 8,
              "text": "Number of consecutive hits: 8times, Duration:11sec"
            },
            {
              "level": 9,
              "text": "Number of consecutive hits: 9times, Duration:12sec"
            },
            {
              "level": 10,
              "text": "Number of consecutive hits:10times, Duration:13sec"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "4 seconds",
          "castDelay": "1 second",
          "cooldown": "6 seconds",
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
                },
                {
                  "level": 6,
                  "value": "50"
                },
                {
                  "level": 7,
                  "value": "52"
                },
                {
                  "level": 8,
                  "value": "54"
                },
                {
                  "level": 9,
                  "value": "56"
                },
                {
                  "level": 10,
                  "value": "58"
                }
              ]
            }
          ],
          "spCost": "38 + (Skill Level × 2)",
          "duration": "(Skill Level + 4) seconds",
          "castRange": "Magic",
          "areaOfEffect": "7 x 7",
          "translations": {
            "pt-BR": {
              "name": " Magnus Exorcismus ",
              "description": "Cria no chão a grande cruz que emite uma luz a cada 3 segundos.\nCada luz causa 100% de ATQM da propriedade Sagrado contra todas as raças que se aproximarem.\nEm oponentes das raças Demônio ou Morto-Vivo e oponentes de propriedades Sombrio ou Maldito receberão 130% do ATQM .",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Magnus_Exorcismus"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/79.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/79",
          "tree": {
            "idx": 25,
            "row": 3,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 12,
                "level": 1,
                "name": "Safety Wall",
                "visible": true
              },
              {
                "id": 77,
                "level": 3,
                "name": "Turn Undead",
                "visible": true
              },
              {
                "id": 78,
                "level": 1,
                "name": "Lex Aeterna",
                "visible": true
              }
            ]
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
                "value": "38 + (Skill Level × 2)"
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
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "6 seconds"
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
                      "duration": "4 seconds",
                      "effect": "Number of consecutive hits: 1time",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "5 seconds",
                      "effect": "Number of consecutive hits: 2times",
                      "sp-cost": "42"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "6 seconds",
                      "effect": "Number of consecutive hits: 3times",
                      "sp-cost": "44"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "7 seconds",
                      "effect": "Number of consecutive hits: 4times",
                      "sp-cost": "46"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "8 seconds",
                      "effect": "Number of consecutive hits: 5times",
                      "sp-cost": "48"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "9 seconds",
                      "effect": "Number of consecutive hits: 6times",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "Number of consecutive hits: 7times",
                      "sp-cost": "52"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "11 seconds",
                      "effect": "Number of consecutive hits: 8times",
                      "sp-cost": "54"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "12 seconds",
                      "effect": "Number of consecutive hits: 9times",
                      "sp-cost": "56"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "13 seconds",
                      "effect": "Number of consecutive hits:10times",
                      "sp-cost": "58"
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
          "id": 1014,
          "imageFile": "1014.png",
          "name": "Redemptio",
          "maxLevel": 1,
          "prerequisiteText": "Quest complete",
          "group": "Active",
          "type": "Recovery",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Redemptio",
          "description": "Reduces your HP to 1 and revives all the party members on the screen at the cost of 800 SP. Heals the HP of every revived player by 50%.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "800"
                }
              ]
            }
          ],
          "spCost": "400",
          "fixedCastTime": "0.8 seconds",
          "variableCastTime": "3.2 seconds",
          "areaOfEffect": "15 x 15",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/1014.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/1014",
          "tree": {
            "idx": 27,
            "row": 3,
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
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "400"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.8 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "3.2 seconds"
              },
              {
                "label": "Target",
                "value": "Caster Only"
              },
              {
                "label": "Area of Effect",
                "value": "15 x 15"
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
                      "sp-cost": "800"
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
      "label": "Acolyte",
      "pointLimit": 49,
      "tree": {
        "columns": 7,
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
          "id": 24,
          "imageFile": "24.png",
          "name": "Ruwach",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Supportive, Magic",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Ruwach",
          "description": "Each cast consumes SP10, reveal hidden enemies within 5*5cell around it.\nIf the hidden is enemy, inflict 145% Holy property magic damage.",
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
          "duration": "10 seconds",
          "areaOfEffect": "5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/24.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/24",
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
                "value": "Immediately"
              },
              {
                "label": "Area of Effect",
                "value": "5 x 5"
              },
              {
                "label": "Duration",
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
          "id": 28,
          "imageFile": "28.png",
          "name": "Heal",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Recovery",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Heal",
          "description": "Restores HP of a single target. This skill is also affected by User's LV, total INT, MATK.\nVersus Undead property targets, inflicts Holy property damage equal to half the amount of the HP restored.",
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
                },
                {
                  "level": 6,
                  "value": "28"
                },
                {
                  "level": 7,
                  "value": "31"
                },
                {
                  "level": 8,
                  "value": "34"
                },
                {
                  "level": 9,
                  "value": "37"
                },
                {
                  "level": 10,
                  "value": "40"
                }
              ]
            }
          ],
          "spCost": "10 + (Skill Level × 3)",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/28.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/28",
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
                "value": "10 + (Skill Level × 3)"
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
                      "sp-cost": "31"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "34"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "37"
                    }
                  },
                  {
                    "level": 10,
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
          "id": 31,
          "imageFile": "31.png",
          "name": "Aqua Benedicta",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Supportive",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Aqua_Benedicta",
          "description": "Draws water under the caster to create a single Holy Water from it. Requires the player to be in shallow water and each cast consumes SP10.",
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
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "0.8 seconds",
          "castDelay": "0.5 seconds",
          "translations": {
            "pt-BR": {
              "name": " Aqua Benedicta ",
              "description": "Cria Água Benta a partir de uma Garrafa Vazia e um pouco de água.\nConcentrar · Olhos de Águia · Olhos de Coruja\nAumentar Capacidade de Carga · Comércio · Desconto · Identificar Item · Mammonita · Superfaturar · Usar Carrinho",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Aqua_Benedicta"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/31.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/31",
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
                "value": "1"
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
          "balanceNotes": [],
          "api": {
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 22,
          "imageFile": "22.png",
          "name": "Divine Protection",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Divine_Protection",
          "description": "Raises Soft Defense against Demon and Undead race monsters. The higher the character level, the higher the damage reduction.\nDecrease the damage received from Demon and Undead race monsters by the amount of damage reduction.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage reduction + 3"
            },
            {
              "level": 2,
              "text": "Damage reduction + 6"
            },
            {
              "level": 3,
              "text": "Damage reduction + 9"
            },
            {
              "level": 4,
              "text": "Damage reduction + 12"
            },
            {
              "level": 5,
              "text": "Damage reduction + 15"
            },
            {
              "level": 6,
              "text": "Damage reduction + 18"
            },
            {
              "level": 7,
              "text": "Damage reduction + 21"
            },
            {
              "level": 8,
              "text": "Damage reduction + 24"
            },
            {
              "level": 9,
              "text": "Damage reduction + 27"
            },
            {
              "level": 10,
              "text": "Damage reduction + 30"
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
          "iconUrl": "assets/divine-pride/skills/22.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/22",
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
                    "id": "damage-reduction",
                    "label": "Damage Reduction"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "damage-reduction": "+ 3",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "damage-reduction": "+ 6",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "damage-reduction": "+ 9",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "damage-reduction": "+ 12",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "damage-reduction": "+ 15",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "damage-reduction": "+ 18",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "damage-reduction": "+ 21",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "damage-reduction": "+ 24",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "damage-reduction": "+ 27",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "damage-reduction": "+ 30",
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
          "id": 156,
          "imageFile": "156.png",
          "name": "Holy Light",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Offensive",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Holy_Light",
          "description": "Summon holy light to counter evil.",
          "levelDetails": [],
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
          "spCost": "15",
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "0.8 seconds",
          "castRange": "Magic",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/156.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/156",
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
                "value": "Offensive Skill"
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
                "value": "0.2 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.8 seconds"
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
                "value": "Magic"
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
          "id": 26,
          "imageFile": "26.png",
          "name": "Teleport",
          "maxLevel": 2,
          "prerequisiteText": "Ruwach 1",
          "group": "Active",
          "type": "Supportive",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Teleport",
          "description": "Warps the user to a different location instantly.\nThis skill is disabled within land protector effect.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Warps to Random in Map, ConsumptionSP: 10"
            },
            {
              "level": 2,
              "text": "Warps to Map and Save Point, ConsumptionSP: 9"
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
                  "value": "9"
                }
              ]
            }
          ],
          "spCost": "11 − Skill Level",
          "castDelay": "ASPD",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/26.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/26",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 24,
                "level": 1,
                "name": "Ruwach",
                "visible": true
              }
            ]
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
                "value": "11 − Skill Level"
              },
              {
                "label": "Cast Delay",
                "value": "ASPD"
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
                      "effect": "Warps to Random in Map, ConsumptionSP: 10",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Warps to Map and Save Point, ConsumptionSP: 9",
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
          "id": 35,
          "imageFile": "35.png",
          "name": "Cure",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Supportive",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Cure",
          "description": "Cures a single target from the following status effects: Silence, Chaos and Blind and consumes SP15.",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/35.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/35",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 28,
                "level": 2,
                "name": "Heal",
                "visible": true
              }
            ]
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
          "id": 29,
          "imageFile": "29.png",
          "name": "Increase agility",
          "maxLevel": 10,
          "prerequisiteText": "Heal 3",
          "group": "Active",
          "type": "Buff",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Places a temporary buff on a single target that increases AGI and Movement Speed. Each cast consumes additional HP10.\nWhen use this skill to the target leaving in [Abnormal Status : Decrease agility], the target releases the state and increases agility.",
          "levelDetails": [
            {
              "level": 1,
              "text": "AGI+3, ATK Speed: +1%, Duration: 60sec"
            },
            {
              "level": 2,
              "text": "AGI+4, ATK Speed: +2%, Duration: 80sec"
            },
            {
              "level": 3,
              "text": "AGI+5, ATK Speed: +3%, Duration:100sec"
            },
            {
              "level": 4,
              "text": "AGI+6, ATK Speed: +4%, Duration:120sec"
            },
            {
              "level": 5,
              "text": "AGI+7, ATK Speed: +5%, Duration:140sec"
            },
            {
              "level": 6,
              "text": "AGI+8, ATK Speed: +6%, Duration:160sec"
            },
            {
              "level": 7,
              "text": "AGI+9, ATK Speed: +7%, Duration:180sec"
            },
            {
              "level": 8,
              "text": "AGI+10, ATK Speed: +8%, Duration:200sec"
            },
            {
              "level": 9,
              "text": "AGI+11, ATK Speed: +9%, Duration:220sec"
            },
            {
              "level": 10,
              "text": "AGI+12, ATK Speed: +10%, Duration:240sec"
            }
          ],
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "0.8 seconds",
          "castDelay": "0.4 seconds",
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
                },
                {
                  "level": 6,
                  "value": "33"
                },
                {
                  "level": 7,
                  "value": "36"
                },
                {
                  "level": 8,
                  "value": "39"
                },
                {
                  "level": 9,
                  "value": "42"
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
          "iconUrl": "assets/divine-pride/skills/29.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/29",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 28,
                "level": 3,
                "name": "Heal",
                "visible": true
              }
            ]
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
                "value": "0.4 seconds"
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
                  },
                  {
                    "id": "duration",
                    "label": "Duration"
                  },
                  {
                    "id": "agi",
                    "label": "Agi"
                  },
                  {
                    "id": "atk-speed",
                    "label": "Atk Speed:"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "60 seconds",
                      "agi": "+3",
                      "atk-speed": "+1%",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "80 seconds",
                      "agi": "+4",
                      "atk-speed": "+2%",
                      "sp-cost": "21"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "100 seconds",
                      "agi": "+5",
                      "atk-speed": "+3%",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "120 seconds",
                      "agi": "+6",
                      "atk-speed": "+4%",
                      "sp-cost": "27"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "140 seconds",
                      "agi": "+7",
                      "atk-speed": "+5%",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "160 seconds",
                      "agi": "+8",
                      "atk-speed": "+6%",
                      "sp-cost": "33"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "180 seconds",
                      "agi": "+9",
                      "atk-speed": "+7%",
                      "sp-cost": "36"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "200 seconds",
                      "agi": "+10",
                      "atk-speed": "+8%",
                      "sp-cost": "39"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "220 seconds",
                      "agi": "+11",
                      "atk-speed": "+9%",
                      "sp-cost": "42"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "240 seconds",
                      "agi": "+12",
                      "atk-speed": "+10%",
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
          "id": 34,
          "imageFile": "34.png",
          "name": "Blessing",
          "maxLevel": 10,
          "prerequisiteText": "Divine Protection 5",
          "group": "Active",
          "type": "Buff",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Blessing",
          "description": "Places a temporary buff on a single target that increases STR, DEX, INT and Accuracy rate. This skill also purges the target of Curse and Stone statuses.\nVersus Undead property and Demon race monsters, halves their STR, DEX and INT instead.",
          "levelDetails": [
            {
              "level": 1,
              "text": "STR,INT,DEX+1,HIT+2, Duration: 60sec"
            },
            {
              "level": 2,
              "text": "STR,INT,DEX+2,HIT+4, Duration: 80sec"
            },
            {
              "level": 3,
              "text": "STR,INT,DEX+3,HIT+6, Duration:100sec"
            },
            {
              "level": 4,
              "text": "STR,INT,DEX+4,HIT+8, Duration:120sec"
            },
            {
              "level": 5,
              "text": "STR,INT,DEX+5,HIT+10, Duration:140sec"
            },
            {
              "level": 6,
              "text": "STR,INT,DEX+6,HIT+12, Duration:160sec"
            },
            {
              "level": 7,
              "text": "STR,INT,DEX+7,HIT+14, Duration:180sec"
            },
            {
              "level": 8,
              "text": "STR,INT,DEX+8,HIT+16, Duration:200sec"
            },
            {
              "level": 9,
              "text": "STR,INT,DEX+9,HIT+18, Duration:220sec"
            },
            {
              "level": 10,
              "text": "STR,INT,DEX+10,HIT+20, Duration:240sec"
            }
          ],
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
                },
                {
                  "level": 6,
                  "value": "48"
                },
                {
                  "level": 7,
                  "value": "52"
                },
                {
                  "level": 8,
                  "value": "56"
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
          "spCost": "24 + (Skill Level × 4)",
          "duration": "40 + (Skill Level × 20) seconds",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/34.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/34",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 22,
                "level": 5,
                "name": "Divine Protection",
                "visible": true
              }
            ]
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
                "value": "24 + (Skill Level × 4)"
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
                  },
                  {
                    "id": "duration",
                    "label": "Duration"
                  },
                  {
                    "id": "hit",
                    "label": "Hit"
                  },
                  {
                    "id": "str-int-dex",
                    "label": "Str,int,dex"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "60 seconds",
                      "str-int-dex": "+1",
                      "hit": "+2",
                      "sp-cost": "28"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "80 seconds",
                      "str-int-dex": "+2",
                      "hit": "+4",
                      "sp-cost": "32"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "100 seconds",
                      "str-int-dex": "+3",
                      "hit": "+6",
                      "sp-cost": "36"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "120 seconds",
                      "str-int-dex": "+4",
                      "hit": "+8",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "140 seconds",
                      "str-int-dex": "+5",
                      "hit": "+10",
                      "sp-cost": "44"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "160 seconds",
                      "str-int-dex": "+6",
                      "hit": "+12",
                      "sp-cost": "48"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "180 seconds",
                      "str-int-dex": "+7",
                      "hit": "+14",
                      "sp-cost": "52"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "200 seconds",
                      "str-int-dex": "+8",
                      "hit": "+16",
                      "sp-cost": "56"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "220 seconds",
                      "str-int-dex": "+9",
                      "hit": "+18",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "240 seconds",
                      "str-int-dex": "+10",
                      "hit": "+20",
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
          "id": 23,
          "imageFile": "23.png",
          "name": "Demonbane",
          "maxLevel": 10,
          "prerequisiteText": "Divine Protection 3",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Raises Physical Attack (Weapon Mastery) against Demon and Undead race monsters.\nDamage is added to the physical damage given to Demon and Undead race monsters.",
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
              "text": "Damage + 12"
            },
            {
              "level": 5,
              "text": "Damage + 15"
            },
            {
              "level": 6,
              "text": "Damage + 18"
            },
            {
              "level": 7,
              "text": "Damage + 21"
            },
            {
              "level": 8,
              "text": "Damage + 24"
            },
            {
              "level": 9,
              "text": "Damage + 27"
            },
            {
              "level": 10,
              "text": "Damage + 30"
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
          "iconUrl": "assets/divine-pride/skills/23.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/23",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 22,
                "level": 3,
                "name": "Divine Protection",
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
          "id": 33,
          "imageFile": "33.png",
          "name": "Angelus",
          "maxLevel": 10,
          "prerequisiteText": "Divine Protection 3",
          "group": "Active",
          "type": "Buff",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Angelus",
          "description": "Increase physical defense and MaxHP on the user and all party members in a 14x14 area around the user.",
          "levelDetails": [
            {
              "level": 1,
              "text": "VIT Defense+ 5%, HP+ 50, Duration: 30sec"
            },
            {
              "level": 2,
              "text": "VIT Defense+10%, HP+100, Duration: 60sec"
            },
            {
              "level": 3,
              "text": "VIT Defense+15%, HP+150, Duration: 90sec"
            },
            {
              "level": 4,
              "text": "VIT Defense+20%, HP+200, Duration:120sec"
            },
            {
              "level": 5,
              "text": "VIT Defense+25%, HP+250, Duration:150sec"
            },
            {
              "level": 6,
              "text": "VIT Defense+30%, HP+300, Duration:180sec"
            },
            {
              "level": 7,
              "text": "VIT Defense+35%, HP+350, Duration:210sec"
            },
            {
              "level": 8,
              "text": "VIT Defense+40%, HP+400, Duration:240sec"
            },
            {
              "level": 9,
              "text": "VIT Defense+45%, HP+450, Duration:270sec"
            },
            {
              "level": 10,
              "text": "VIT Defense+50%, HP+500, Duration:300sec"
            }
          ],
          "fixedCastTime": "0.15 seconds",
          "variableCastTime": "0.35 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "30 seconds",
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
                },
                {
                  "level": 6,
                  "value": "38"
                },
                {
                  "level": 7,
                  "value": "41"
                },
                {
                  "level": 8,
                  "value": "44"
                },
                {
                  "level": 9,
                  "value": "47"
                },
                {
                  "level": 10,
                  "value": "50"
                }
              ]
            }
          ],
          "spCost": "20 + (Skill Level × 3)",
          "duration": "(Skill Level × 30) seconds",
          "areaOfEffect": "14 x 14",
          "translations": {
            "pt-BR": {
              "name": " Angelus ",
              "description": "Uma oração para anunciar boas virtudes.\nAumenta o HP e a DEF de todos os membros do grupo ao redor do usuário.\nConcentrar · Olhos de Águia · Olhos de Coruja",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Angelus"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/33.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/33",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 22,
                "level": 3,
                "name": "Divine Protection",
                "visible": true
              }
            ]
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
                "value": "20 + (Skill Level × 3)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.15 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.35 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "30 seconds"
              },
              {
                "label": "Target",
                "value": "Immediately"
              },
              {
                "label": "Area of Effect",
                "value": "14 x 14"
              }
            ],
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
                    "id": "hp",
                    "label": "Hp"
                  },
                  {
                    "id": "vit-defense",
                    "label": "Vit Defense"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "30 seconds",
                      "vit-defense": "+ 5%",
                      "hp": "+ 50",
                      "sp-cost": "23"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "60 seconds",
                      "vit-defense": "+10%",
                      "hp": "+100",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "90 seconds",
                      "vit-defense": "+15%",
                      "hp": "+150",
                      "sp-cost": "29"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "120 seconds",
                      "vit-defense": "+20%",
                      "hp": "+200",
                      "sp-cost": "32"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "150 seconds",
                      "vit-defense": "+25%",
                      "hp": "+250",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "180 seconds",
                      "vit-defense": "+30%",
                      "hp": "+300",
                      "sp-cost": "38"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "210 seconds",
                      "vit-defense": "+35%",
                      "hp": "+350",
                      "sp-cost": "41"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "240 seconds",
                      "vit-defense": "+40%",
                      "hp": "+400",
                      "sp-cost": "44"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "270 seconds",
                      "vit-defense": "+45%",
                      "hp": "+450",
                      "sp-cost": "47"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "300 seconds",
                      "vit-defense": "+50%",
                      "hp": "+500",
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
          "id": 27,
          "imageFile": "27.png",
          "name": "Warp portal",
          "maxLevel": 4,
          "prerequisiteText": "Teleportation 2",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Creates a Warp Portal that will transport those that enter to the portal's destination. Up to 8 players can be transported regardless of the skill level. Each cast consumes a Blue Gemstone.\nThis skill is disabled within land protector effect.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Move to save point."
            },
            {
              "level": 2,
              "text": "1 custom position available"
            },
            {
              "level": 3,
              "text": "2 custom position available"
            },
            {
              "level": 4,
              "text": "3 custom position available\n[Custom Position] : Stand in the area and type in [/memo] to store a Memo Point of the current spot."
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
                  "value": "32"
                },
                {
                  "level": 3,
                  "value": "29"
                },
                {
                  "level": 4,
                  "value": "26"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/27.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/27",
          "tree": {
            "idx": 15,
            "row": 2,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 26,
                "level": 2,
                "name": "Teleport",
                "visible": true
              }
            ]
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
                      "effect": "Move to save point",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "1 custom position available",
                      "sp-cost": "32"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "2 custom position available",
                      "sp-cost": "29"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "3 custom position available\n[Custom Position] : Stand in the area and type in [ / memo] to store a Memo Point of the current spot",
                      "sp-cost": "26"
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
          "id": 30,
          "imageFile": "30.png",
          "name": "Decrease agility",
          "maxLevel": 10,
          "prerequisiteText": "Increase agility 1",
          "group": "Active",
          "type": "Debuff",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Attempts to place a debuff[Abnormal Status : Decrease agility] on a single target.\nTarget's movement speed and AGI is decreased during the Duration.",
          "levelDetails": [
            {
              "level": 1,
              "text": "AGI- 3, success rate: 53%, Duration: 20sec"
            },
            {
              "level": 2,
              "text": "AGI- 4, success rate: 56%, Duration: 25sec"
            },
            {
              "level": 3,
              "text": "AGI- 5, success rate: 59%, Duration: 30sec"
            },
            {
              "level": 4,
              "text": "AGI- 6, success rate: 62%, Duration: 35sec"
            },
            {
              "level": 5,
              "text": "AGI- 7, success rate: 65%, Duration: 40sec"
            },
            {
              "level": 6,
              "text": "AGI- 8, success rate: 68%, Duration: 45sec"
            },
            {
              "level": 7,
              "text": "AGI- 9, success rate: 71%, Duration: 50sec"
            },
            {
              "level": 8,
              "text": "AGI-10, success rate: 74%, Duration: 55sec"
            },
            {
              "level": 9,
              "text": "AGI-11, success rate: 77%, Duration: 60sec"
            },
            {
              "level": 10,
              "text": "AGI-12, success rate: 80%, Duration: 65sec"
            }
          ],
          "fixedCastTime": "0.25 seconds",
          "variableCastTime": "0.75 seconds",
          "castDelay": "1 second",
          "cooldown": "0.5 seconds",
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
                  "value": "17"
                },
                {
                  "level": 3,
                  "value": "19"
                },
                {
                  "level": 4,
                  "value": "21"
                },
                {
                  "level": 5,
                  "value": "23"
                },
                {
                  "level": 6,
                  "value": "25"
                },
                {
                  "level": 7,
                  "value": "27"
                },
                {
                  "level": 8,
                  "value": "29"
                },
                {
                  "level": 9,
                  "value": "31"
                },
                {
                  "level": 10,
                  "value": "33"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/30.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/30",
          "tree": {
            "idx": 17,
            "row": 2,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 29,
                "level": 1,
                "name": "Increase Agility",
                "visible": true
              }
            ]
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
                "value": "0.75 seconds"
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
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  },
                  {
                    "id": "agi",
                    "label": "Agi"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "20 seconds",
                      "agi": "- 3",
                      "effect": "success rate: 53%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "25 seconds",
                      "agi": "- 4",
                      "effect": "success rate: 56%",
                      "sp-cost": "17"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "30 seconds",
                      "agi": "- 5",
                      "effect": "success rate: 59%",
                      "sp-cost": "19"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "35 seconds",
                      "agi": "- 6",
                      "effect": "success rate: 62%",
                      "sp-cost": "21"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "40 seconds",
                      "agi": "- 7",
                      "effect": "success rate: 65%",
                      "sp-cost": "23"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "45 seconds",
                      "agi": "- 8",
                      "effect": "success rate: 68%",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "50 seconds",
                      "agi": "- 9",
                      "effect": "success rate: 71%",
                      "sp-cost": "27"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "55 seconds",
                      "agi": "-10",
                      "effect": "success rate: 74%",
                      "sp-cost": "29"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "60 seconds",
                      "agi": "-11",
                      "effect": "success rate: 77%",
                      "sp-cost": "31"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "65 seconds",
                      "agi": "-12",
                      "effect": "success rate: 80%",
                      "sp-cost": "33"
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
          "id": 32,
          "imageFile": "32.png",
          "name": "Signum Crucis",
          "maxLevel": 10,
          "prerequisiteText": "Demon Bane 3",
          "group": "Active",
          "type": "Debuff",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Signum_Crucis",
          "description": "Decreases the hard defense of all Undead property and Demon race monsters in the caster's screen.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Physical Defense -14%, success rate: 27%"
            },
            {
              "level": 2,
              "text": "Physical Defense -18%, success rate: 31%"
            },
            {
              "level": 3,
              "text": "Physical Defense -22%, success rate: 35%"
            },
            {
              "level": 4,
              "text": "Physical Defense -26%, success rate: 39%"
            },
            {
              "level": 5,
              "text": "Physical Defense -30%, success rate: 43%"
            },
            {
              "level": 6,
              "text": "Physical Defense -34%, success rate: 47%"
            },
            {
              "level": 7,
              "text": "Physical Defense -38%, success rate: 51%"
            },
            {
              "level": 8,
              "text": "Physical Defense -42%, success rate: 55%"
            },
            {
              "level": 9,
              "text": "Physical Defense -46%, success rate: 59%"
            },
            {
              "level": 10,
              "text": "Physical Defense -50%, success rate: 63%"
            }
          ],
          "fixedCastTime": "0.15 seconds",
          "variableCastTime": "0.35 seconds",
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
                },
                {
                  "level": 6,
                  "value": "35"
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
                  "value": "35"
                },
                {
                  "level": 10,
                  "value": "35"
                }
              ]
            }
          ],
          "spCost": "35",
          "areaOfEffect": "Screen",
          "translations": {
            "pt-BR": {
              "name": " Signum Crucis ",
              "description": "Marca o mal com o símbolo da cruz.\nTem chance de reduzir a DEF da raça demônio e da propriedade maldito .\nConcentrar · Olhos de Águia · Olhos de Coruja",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Signum_Crucis"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/32.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/32",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 23,
                "level": 3,
                "name": "Demon Bane",
                "visible": true
              }
            ]
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
                "value": "35"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.15 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.35 seconds"
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
              },
              {
                "label": "Area of Effect",
                "value": "Screen"
              }
            ],
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
                    "id": "physical-defense",
                    "label": "Physical Defense"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "physical-defense": "-14%",
                      "effect": "success rate: 27%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "physical-defense": "-18%",
                      "effect": "success rate: 31%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "physical-defense": "-22%",
                      "effect": "success rate: 35%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "physical-defense": "-26%",
                      "effect": "success rate: 39%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "physical-defense": "-30%",
                      "effect": "success rate: 43%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "physical-defense": "-34%",
                      "effect": "success rate: 47%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "physical-defense": "-38%",
                      "effect": "success rate: 51%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "physical-defense": "-42%",
                      "effect": "success rate: 55%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "physical-defense": "-46%",
                      "effect": "success rate: 59%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "physical-defense": "-50%",
                      "effect": "success rate: 63%",
                      "sp-cost": "35"
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
          "id": 25,
          "imageFile": "25.png",
          "name": "Pneuma",
          "maxLevel": 1,
          "prerequisiteText": "Warp portal 4",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Pneuma",
          "description": "Each cast consumes SP10, Creates a green cloud on a targeted location that blocks Ranged physical damage for ten seconds.",
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
          "duration": "10 seconds",
          "castRange": "9 cells",
          "areaOfEffect": "3 x 3",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/25.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/25",
          "tree": {
            "idx": 22,
            "row": 3,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 27,
                "level": 4,
                "name": "Warp Portal",
                "visible": true
              }
            ]
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
                "value": "Ground"
              },
              {
                "label": "Area of Effect",
                "value": "3 x 3"
              },
              {
                "label": "Duration",
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
        }
      ]
    }
  ],
  "skills": [
    {
      "id": 5280,
      "imageFile": "5280.png",
      "name": "Dilectio Heal",
      "maxLevel": 5,
      "prerequisiteText": "Coluseo Heal Lv. 3 and High Heal Lv. 3",
      "group": "Active",
      "type": "Healing",
      "target": "You and Your Party",
      "recoversAp": "1",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Dilectio_Heal",
      "description": "Restore HP for you and one or more surrounding party members.",
      "levelDetails": [],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "0.3 seconds",
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
        }
      ],
      "spCost": "45 + (5 × Skill Level)",
      "areaOfEffect": "3 x 3~7 x 7",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5280.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5280",
      "tree": {
        "idx": 1,
        "row": 0,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 2043,
            "level": 3,
            "name": "Coluseo Heal",
            "visible": false
          },
          {
            "id": 2051,
            "level": 3,
            "name": "High Heal",
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
            "label": "SP Cost",
            "value": "45 + (5 × Skill Level)"
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
            "value": "0.5 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.3 seconds"
          },
          {
            "label": "Target",
            "value": "You and Your Party"
          },
          {
            "label": "Area of Effect",
            "value": "3 x 3~7 x 7"
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
                  "sp-cost": "50"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "55"
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
                  "sp-cost": "65"
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
      "id": 5276,
      "imageFile": "5276.png",
      "name": "Fidus Animus",
      "maxLevel": 10,
      "prerequisiteText": "basic skill",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Fidus_Animus",
      "description": "Increase your Holy Magic damage.\nThis skill also affects Flamen, Arbitrium, and Pneumaticus Procella damage.",
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
      "translations": {
        "pt-BR": {
          "name": " Fidus Animus ",
          "description": "Eleva a fé da sua alma.\nAumenta o dano mágico da propriedade Sagrado .",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Fidus_Animus"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5276.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5276",
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
        "status": "translated",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5270,
      "imageFile": "5270.png",
      "name": "Mace Book Mastery",
      "maxLevel": 10,
      "prerequisiteText": "basic skill",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Maces and Books increase Physical damage on enemies, depending on their size.\nThis skill also affects Petitio and Effligo damage.",
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
      "iconUrl": "assets/divine-pride/skills/5270.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5270",
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
      "id": 5269,
      "imageFile": "5269.png",
      "name": "Mediale Votum",
      "maxLevel": 5,
      "prerequisiteText": "Dilectio Heal Lv. 3",
      "group": "Active",
      "type": "Healing",
      "target": "You and Your Party",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Mediale_Votum",
      "description": "Bless 1 party member.\nThis skill restores HP for its target and surrounding party members in 9 x9 cells every 2 seconds, by a portion of the target's HP.",
      "levelDetails": [],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "2 seconds",
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
      "spCost": "20 + (10 × Skill Level)",
      "duration": "20 + (20 × Skill Level) seconds",
      "castRange": "9 cells",
      "areaOfEffect": "9 x 9",
      "translations": {
        "pt-BR": {
          "name": " Mediale Votum ",
          "description": "Abençoa um personagem, podendo ser você ou um membro do grupo .\nA cada 2 segundos, eles terão seu HP regenerado de acordo com o HP máximo.\nMembros do grupo que estiverem ao redor do personagem afetado receberão a cura.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Mediale_Votum"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5269.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5269",
      "tree": {
        "idx": 8,
        "row": 1,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 5280,
            "level": 3,
            "name": "Dilectio Heal",
            "visible": true
          }
        ]
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
            "value": "20 + (10 × Skill Level)"
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
            "value": "0 seconds"
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
            "value": "You and Your Party"
          },
          {
            "label": "Area of Effect",
            "value": "9 x 9"
          },
          {
            "label": "Duration",
            "value": "20 + (20 × Skill Level) seconds"
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
        "status": "translated",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5282,
      "imageFile": "5282.png",
      "name": "Benedictum",
      "maxLevel": 5,
      "prerequisiteText": "Canto Candidus Lv. 3 and Dilectio Heal Lv. 2",
      "group": "Active",
      "type": "Buff",
      "target": "1 Target",
      "recoversAp": "1",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Benedictum",
      "description": "Bless a target, temporarily increasing their POW, CRT, and CON.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "0 seconds",
      "castDelay": "0.7 seconds",
      "cooldown": "0.25 seconds",
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
      "spCost": "65 + (5 × Skill Level)",
      "duration": "90 + (30 × Skill Level) seconds",
      "castRange": "9 cells",
      "translations": {
        "pt-BR": {
          "name": " Benedictum ",
          "description": "Reza para o alvo, fortalecendo sua fé.\nAumenta POD , CRV e CON temporariamente.\nA cada 100 pontos de C.Mais , os bônus aumentam +2.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Benedictum"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5282.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5282",
      "tree": {
        "idx": 9,
        "row": 1,
        "col": 2,
        "columns": 7,
        "requirements": [
          {
            "id": 2042,
            "level": 3,
            "name": "Cantocandidus",
            "visible": false
          },
          {
            "id": 5280,
            "level": 2,
            "name": "Dilectio Heal",
            "visible": true
          }
        ]
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
            "value": "65 + (5 × Skill Level)"
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
            "value": "0.7 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.25 seconds"
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
            "label": "Duration",
            "value": "90 + (30 × Skill Level) seconds"
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
                  "sp-cost": "70"
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
                  "sp-cost": "80"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "85"
                }
              },
              {
                "level": 5,
                "values": {
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
        "status": "translated",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5281,
      "imageFile": "5281.png",
      "name": "Religio",
      "maxLevel": 5,
      "prerequisiteText": "Clementia Lv. 3 and Dilectio Heal Lv. 2",
      "group": "Active",
      "type": "Buff",
      "target": "1 Target",
      "recoversAp": "1",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Religio",
      "description": "Maximize the target's faith, temporarily increasing their SPL, WIS, and STA.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "0 seconds",
      "castDelay": "0.7 seconds",
      "cooldown": "0.25 seconds",
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
      "spCost": "65 + (5 × Skill Level)",
      "duration": "90 + (30 × Skill Level) seconds",
      "castRange": "9 cells",
      "translations": {
        "pt-BR": {
          "name": " Religio ",
          "description": "Reza para o alvo, fortalecendo sua fé.\nAumenta FEI , SAB e STA temporariamente.\nA cada 100 pontos de C.Mais , os bônus aumentam +2.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Religio"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5281.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5281",
      "tree": {
        "idx": 10,
        "row": 1,
        "col": 3,
        "columns": 7,
        "requirements": [
          {
            "id": 2041,
            "level": 3,
            "name": "Clementia",
            "visible": false
          },
          {
            "id": 5280,
            "level": 2,
            "name": "Dilectio Heal",
            "visible": true
          }
        ]
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
            "value": "65 + (5 × Skill Level)"
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
            "value": "0.7 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.25 seconds"
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
            "label": "Duration",
            "value": "90 + (30 × Skill Level) seconds"
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
                  "sp-cost": "70"
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
                  "sp-cost": "80"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "85"
                }
              },
              {
                "level": 5,
                "values": {
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
        "status": "translated",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5284,
      "imageFile": "5284.png",
      "name": "Framen",
      "maxLevel": 5,
      "prerequisiteText": "Judex 10, Fidus Animus 5",
      "group": "Active",
      "type": "Magic",
      "target": "Single Target",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Framen",
      "description": "Inflict Holy magical damage to the target and surrounding enemies.\nDamage is increased if target is Demon or Undead race.\nDamage is additionally increased depending on the user's base level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 950+(Fidus Animus Lv x5)%\n/ 1050+(Fidus Animus Lv x5)% (Demon,Undead) / Range: 5x5 Cells"
        },
        {
          "level": 2,
          "text": "MATK 1900+(Fidus Animus Lv x10)%\n/ 2100+(Fidus Animus Lv x10)% (Demon,Undead) / Range: 5x5 Cells"
        },
        {
          "level": 3,
          "text": "MATK 2850+(Fidus Animus Lv x15)%\n/ 3150+(Fidus Animus Lv x15)% (Demon,Undead) / Range: 5x5 Cells"
        },
        {
          "level": 4,
          "text": "MATK 3800+(Fidus Animus Lv x20)%\n/ 4200+(Fidus Animus Lv x20)% (Demon,Undead) / Range: 7x7 Cells"
        },
        {
          "level": 5,
          "text": "MATK 4750+(Fidus Animus Lv x25)%\n/ 5250+(Fidus Animus Lv x25)% (Demon,Undead) / Range: 7x7 Cells"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "5 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "0.3 seconds",
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
              "value": "83"
            },
            {
              "level": 3,
              "value": "86"
            },
            {
              "level": 4,
              "value": "89"
            },
            {
              "level": 5,
              "value": "92"
            }
          ]
        }
      ],
      "spCost": "35 + (5 x Skill Level)",
      "castRange": "Magic",
      "areaOfEffect": "5 x 5 ~ 7 x 7",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5284.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5284",
      "tree": {
        "idx": 11,
        "row": 1,
        "col": 4,
        "columns": 7,
        "requirements": [
          {
            "id": 2038,
            "level": 10,
            "name": "Judex",
            "visible": false
          },
          {
            "id": 5276,
            "level": 5,
            "name": "Fidus Animus",
            "visible": true
          }
        ]
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
            "value": "35 + (5 x Skill Level)"
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
            "value": "0.3 seconds"
          },
          {
            "label": "Cast Range",
            "value": "Magic"
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
                  "area-of-effect": "5x5",
                  "sp-cost": "80"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "83"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "86"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "89"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "92"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Framen",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/cardinal/rebalance_1.md",
          "section": "9.2",
          "notes": [
            "Reduces cooldown from 3 seconds to 0.3 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
            "Reduces AP recovery rate from 3 to 1."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "3 seconds",
              "after": "0.3 seconds",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 3 seconds to 0.3 seconds based on level 5."
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
              "before": "3",
              "after": "1",
              "scope": "",
              "source": "Reduces AP recovery rate from 3 to 1."
            }
          ]
        },
        {
          "skillName": "Framen",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/cardinal/rebalance_2.md",
          "section": "9.1",
          "notes": [
            "Increases SP consumption from 60 to 92 based on level 5.",
            "Increases AP recovery rate from 1 to 2.",
            "Increases damage from 2750%/3500%(demon and undead race)Matk to 4250%/4750%(demon and undead race)Matk based on level 5 (Fidus Animus level 10)."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "60",
              "after": "92",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 60 to 92 based on level 5."
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
              "before": "2750%/3500%(demon and undead race)Matk",
              "after": "4250%/4750%(demon and undead race)Matk",
              "scope": "Lv 5 (Fidus Animus level 10)",
              "source": "Increases damage from 2750%/3500%(demon and undead race)Matk to 4250%/4750%(demon and undead race)Matk based on level 5 (Fidus Animus level 10)."
            }
          ]
        },
        {
          "skillName": "Framen",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/cardinal/rebalance_3.md",
          "section": "5.1",
          "notes": [
            "Increases base damage from 4000%/4500%Matk to 4750%/5250%Matk based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "4000%/4500%Matk",
              "after": "4750%/5250%Matk",
              "scope": "Lv 5",
              "source": "Increases base damage from 4000%/4500%Matk to 4750%/5250%Matk based on level 5."
            }
          ]
        },
        {
          "skillName": "Framen",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/cardinal/rebalance_4.md",
          "section": "5.1",
          "notes": [
            "Increases base damage from 4750+(Fidus Animus skill level x 25)%/5250+(Fidus Animus skill level x 25)%(demon and undead)Matk to 6500+(Fidus Animus skill level x 25)%/6750+(Fidus Animus skill level x 25)%(demon and undead)Matk based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "4750+(Fidus Animus skill level x 25)%/5250+(Fidus Animus skill level x 25)%(demon and undead)Matk",
              "after": "6500+(Fidus Animus skill level x 25)%/6750+(Fidus Animus skill level x 25)%(demon and undead)Matk",
              "scope": "Lv 5",
              "source": "Increases base damage from 4750+(Fidus Animus skill level x 25)%/5250+(Fidus Animus skill level x 25)%(demon and undead)Matk to 6500+(Fidus Animus skill level x 25)%/6750+(Fidus Animus skill level x 25)%(demon and undead)Matk based on level 5."
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
      "id": 5283,
      "imageFile": "5283.png",
      "name": "Petitio",
      "maxLevel": 10,
      "prerequisiteText": "Duple Light 10, Mace & Book Mastery 5",
      "group": "Active",
      "type": "Melee/Ranged Physical",
      "target": "Single Target",
      "recoversAp": "3",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Petitio",
      "description": "Mace and book only skill.\nDeals physical damage to the target and surrounding enemies around the target.\nIf using mace, damage type is long ranged physical damage. If using book, damage type is melee physical damage.\nDamage is additionally increased depending on the user's base level and POW.\nIn addition, Critical Damage is applied at the user's Critical Chance.\nHowever, In the case of critical damage, half of the total critical damage increase options are applied.\nWhen Duple Light is active, has a chance to auto-cast Petitio when dealing normal physical damage.\nMaximum level of Petitio that the user learned will be auto-cast and the skill won't recover AP from auto-casting.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 1050+(Mace & Book Mastery level x50)%\nArea of Effect : 3x3 Cells"
        },
        {
          "level": 2,
          "text": "ATK 2100+(Mace & Book Mastery level x100)%\nArea of Effect : 3x3 Cells"
        },
        {
          "level": 3,
          "text": "ATK 3150+(Mace & Book Mastery level x150)%\nArea of Effect : 3x3 Cells"
        },
        {
          "level": 4,
          "text": "ATK 4200+(Mace & Book Mastery level x200)%\nArea of Effect : 3x3 Cells"
        },
        {
          "level": 5,
          "text": "ATK 5250+(Mace & Book Mastery level x250)%\nArea of Effect : 5x5 Cells"
        },
        {
          "level": 6,
          "text": "ATK 6300+(Mace & Book Mastery level x300)%\nArea of Effect : 5x5 Cells"
        },
        {
          "level": 7,
          "text": "ATK 7350+(Mace & Book Mastery level x350)%\nArea of Effect : 5x5 Cells"
        },
        {
          "level": 8,
          "text": "ATK 8400+(Mace & Book Mastery level x400)%\nArea of Effect : 5x5 Cells"
        },
        {
          "level": 9,
          "text": "ATK 9450+(Mace & Book Mastery level x450)%\nArea of Effect : 7x7 Cells"
        },
        {
          "level": 10,
          "text": "ATK 10500+(Mace & Book Mastery level x500)%\nArea of Effect : 7x7 Cells"
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
              "value": "38"
            },
            {
              "level": 2,
              "value": "41"
            },
            {
              "level": 3,
              "value": "44"
            },
            {
              "level": 4,
              "value": "47"
            },
            {
              "level": 5,
              "value": "50"
            },
            {
              "level": 6,
              "value": "53"
            },
            {
              "level": 7,
              "value": "56"
            },
            {
              "level": 8,
              "value": "59"
            },
            {
              "level": 9,
              "value": "62"
            },
            {
              "level": 10,
              "value": "65"
            }
          ]
        }
      ],
      "spCost": "28 + (2 x Skill Level)",
      "castRange": "2 cells",
      "areaOfEffect": "3 x 3~9 x 9",
      "translations": {
        "pt-BR": {
          "name": " Petitio ",
          "description": "Derruba o martelo do julgamento divino.\nAtinge um alvo, afetando oponentes na área ao redor.\nO dano infligido depende da arma equipada:",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Petitio"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5283.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5283",
      "tree": {
        "idx": 13,
        "row": 1,
        "col": 6,
        "columns": 7,
        "requirements": [
          {
            "id": 2054,
            "level": 10,
            "name": "Duple Light",
            "visible": false
          },
          {
            "id": 5270,
            "level": 5,
            "name": "Mace Book Mastery",
            "visible": true
          }
        ]
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
            "value": "28 + (2 x Skill Level)"
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
            "value": "2 cells"
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
                  "sp-cost": "38"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "3x3",
                  "sp-cost": "41"
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
                  "sp-cost": "47"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "50"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "53"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "56"
                }
              },
              {
                "level": 8,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "59"
                }
              },
              {
                "level": 9,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "62"
                }
              },
              {
                "level": 10,
                "values": {
                  "area-of-effect": "7x7",
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
          "skillName": "Petitio",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/cardinal/rebalance_1.md",
          "section": "9.1",
          "notes": [
            "Reduces cooldown from 2 seconds to 1 second based on level 10.",
            "Applies critical damage, the critical chance is the user's Cri."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "2 seconds",
              "after": "1 second",
              "scope": "Lv 10",
              "source": "Reduces cooldown from 2 seconds to 1 second based on level 10."
            }
          ]
        },
        {
          "skillName": "Petitio",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/cardinal/rebalance_2.md",
          "section": "9.3",
          "notes": [
            "Reduces cooldown from 1 second to 0.5 seconds.",
            "Increases SP consumption from 50 to 65 based on level 10.",
            "Increases AP recovery rate from 2 to 3.",
            "Increases damage from 3200%Atk to 11500%Atk based on level 10 (Mace & Book Mastery Level 10)."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces cooldown from 1 second to 0.5 seconds."
            },
            {
              "label": "SP Cost",
              "before": "50",
              "after": "65",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 50 to 65 based on level 10."
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
              "before": "3200%Atk",
              "after": "11500%Atk",
              "scope": "Lv 10 (Mace & Book Mastery Level 10)",
              "source": "Increases damage from 3200%Atk to 11500%Atk based on level 10 (Mace & Book Mastery Level 10)."
            }
          ]
        },
        {
          "skillName": "Petitio",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/cardinal/rebalance_3.md",
          "section": "5.3",
          "notes": [
            "Reduces area of effect from 9 x 9 cells to 7 x 7 cells based on level 10.",
            "Increases factor weight of Mace & Book Mastery skill level in skill formula from 100 to 500 based on level 10."
          ],
          "specRows": [
            {
              "label": "Area of Effect",
              "before": "9 x 9 cells",
              "after": "7 x 7 cells",
              "scope": "Lv 10",
              "source": "Reduces area of effect from 9 x 9 cells to 7 x 7 cells based on level 10."
            },
            {
              "label": "Factor Weight Of Mace & Book Mastery Skill Level In Skill Formula",
              "before": "100",
              "after": "500",
              "scope": "Lv 10",
              "source": "Increases factor weight of Mace & Book Mastery skill level in skill formula from 100 to 500 based on level 10."
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
      "id": 5268,
      "imageFile": "5268.png",
      "name": "Repatatio",
      "maxLevel": 5,
      "prerequisiteText": "Mediale Votum Lv. 3",
      "group": "Active",
      "type": "Healing",
      "target": "1 Target",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Repatatio",
      "description": "Fully restore the target's HP.\nCan't be used on monsters, Mercenaries, Spirits, or Humunculi.",
      "levelDetails": [],
      "fixedCastTime": "2 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0 seconds",
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
              "value": "120"
            },
            {
              "level": 3,
              "value": "120"
            },
            {
              "level": 4,
              "value": "120"
            },
            {
              "level": 5,
              "value": "120"
            }
          ]
        }
      ],
      "spCost": "120",
      "cooldown": "150~10 seconds",
      "castRange": "9 cells",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5268.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5268",
      "tree": {
        "idx": 15,
        "row": 2,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 5269,
            "level": 3,
            "name": "Mediale Votum",
            "visible": true
          }
        ]
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
            "value": "120"
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
            "value": "150~10 seconds"
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
                  "sp-cost": "120"
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
                  "sp-cost": "120"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "120"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "120"
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
      "id": 5273,
      "imageFile": "5273.png",
      "name": "Arbitrium",
      "maxLevel": 10,
      "prerequisiteText": "Adoramus 5, Framen 3",
      "group": "Active",
      "type": "Magic",
      "target": "Single Target",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Arbitrium",
      "description": "Calls the light judgement to deals primary holy property magical damage to the target, with a chance to inflict [Ailment: Quiet].\nThen the light explodes on the target, deals secondary holy property magical damage to surrounding enemies within 9 x 9 cells around the target.\nDamage is additionally increased depending on the user's base level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 1000+(Fidus Animus Lv x10)%(1st)\n/ 1750+(Fidus Animus Lv x50)%(2nd)/Quiet inflicting chance: 25%"
        },
        {
          "level": 2,
          "text": "MATK 2000+(Fidus Animus Lv x20)%(1st)\n/ 3500+(Fidus Animus Lv x100)%(2nd)/Quiet inflicting chance: 30%"
        },
        {
          "level": 3,
          "text": "MATK 3000+(Fidus Animus Lv x30)%(1st)\n/ 5250+(Fidus Animus Lv x150)%(2nd)/Quiet inflicting chance: 35%"
        },
        {
          "level": 4,
          "text": "MATK 4000+(Fidus Animus Lv x40)%(1st)\n/ 7000+(Fidus Animus Lv x200)%(2nd)/Quiet inflicting chance: 40%"
        },
        {
          "level": 5,
          "text": "MATK 5000+(Fidus Animus Lv x50)%(1st)\n/ 8750+(Fidus Animus Lv x250)%(2nd)/Quiet inflicting chance: 45%"
        },
        {
          "level": 6,
          "text": "MATK 6000+(Fidus Animus Lv x60)%(1st)\n/ 10500+(Fidus Animus Lv x300)%(2nd)/Quiet inflicting chance: 50%"
        },
        {
          "level": 7,
          "text": "MATK 7000+(Fidus Animus Lv x70)%(1st)\n/ 12250+(Fidus Animus Lv x350)%(2nd)/Quiet inflicting chance: 55%"
        },
        {
          "level": 8,
          "text": "MATK 8000+(Fidus Animus Lv x80)%(1st)\n/ 14000+(Fidus Animus Lv x400)%(2nd)/Quiet inflicting chance: 60%"
        },
        {
          "level": 9,
          "text": "MATK 9000+(Fidus Animus Lv x90)%(1st)\n/ 15750+(Fidus Animus Lv x450)%(2nd)/Quiet inflicting chance: 65%"
        },
        {
          "level": 10,
          "text": "MATK 10000+(Fidus Animus Lv x100)%(1st)\n/ 17500+(Fidus Animus Lv x500)%(2nd)/Quiet inflicting chance: 70%"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "4 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "0.75 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "107"
            },
            {
              "level": 2,
              "value": "109"
            },
            {
              "level": 3,
              "value": "111"
            },
            {
              "level": 4,
              "value": "113"
            },
            {
              "level": 5,
              "value": "115"
            },
            {
              "level": 6,
              "value": "117"
            },
            {
              "level": 7,
              "value": "119"
            },
            {
              "level": 8,
              "value": "121"
            },
            {
              "level": 9,
              "value": "123"
            },
            {
              "level": 10,
              "value": "125"
            }
          ]
        }
      ],
      "spCost": "40 + (10 × Skill Level)",
      "castRange": "Magic",
      "areaOfEffect": "9×9",
      "translations": {
        "pt-BR": {
          "name": " Arbitrium ",
          "description": "Libera a luz do livre arbítrio, que explodirá em um som ensurdecedor.\nA luz causa dano mágico de propriedade Sagrado em um alvo único.\nEsse ataque tem chance de infligir Quietude .",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Arbitrium"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5273.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5273",
      "tree": {
        "idx": 18,
        "row": 2,
        "col": 4,
        "columns": 7,
        "requirements": [
          {
            "id": 2040,
            "level": 5,
            "name": "Adoramus",
            "visible": false
          },
          {
            "id": 5284,
            "level": 3,
            "name": "Flamen",
            "visible": true
          }
        ]
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
            "value": "40 + (10 × Skill Level)"
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
            "value": "0.75 seconds"
          },
          {
            "label": "Cast Range",
            "value": "Magic"
          },
          {
            "label": "Target",
            "value": "Single Target"
          },
          {
            "label": "Area of Effect",
            "value": "9×9"
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
                  "sp-cost": "107"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "109"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "111"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "113"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "115"
                }
              },
              {
                "level": 6,
                "values": {
                  "sp-cost": "117"
                }
              },
              {
                "level": 7,
                "values": {
                  "sp-cost": "119"
                }
              },
              {
                "level": 8,
                "values": {
                  "sp-cost": "121"
                }
              },
              {
                "level": 9,
                "values": {
                  "sp-cost": "123"
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
          "skillName": "Arbitrium",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/cardinal/rebalance_1.md",
          "section": "9.3",
          "notes": [
            "Reduces cooldown from 3 seconds to 2 seconds based on level 5.",
            "Increases damage (includes Fidus Animus level 10 bonus) from 2500%Matk to 5000%Matk based on level 10.",
            "Increases damage of the secondary attack from 1900%Matk to 6500%Matk based on level 10."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "3 seconds",
              "after": "2 seconds",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 3 seconds to 2 seconds based on level 5."
            },
            {
              "label": "Damage",
              "before": "2500%Matk (includes Fidus Animus level 10 bonus)/1900%Matk (secondary attack)",
              "after": "5000%Matk (includes Fidus Animus level 10 bonus)/6500%Matk (secondary attack)",
              "scope": "Lv 10",
              "source": "Increases damage (includes Fidus Animus level 10 bonus) from 2500%Matk to 5000%Matk based on level 10. / Increases damage of the secondary attack from 1900%Matk to 6500%Matk based on level 10."
            }
          ]
        },
        {
          "skillName": "Arbitrium",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/cardinal/rebalance_2.md",
          "section": "9.2",
          "notes": [
            "Reduces cooldown from 2 seconds to 1.5 seconds.",
            "Reduces SP consumption from 140 to 112 based on level 10.",
            "Increases damage from 5000%/6500%(area damage)Matk to 11000%/13500%(area damage)Matk based on level 10."
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
              "before": "140",
              "after": "112",
              "scope": "Lv 10",
              "source": "Reduces SP consumption from 140 to 112 based on level 10."
            },
            {
              "label": "Damage",
              "before": "5000%/6500%(area damage)Matk",
              "after": "11000%/13500%(area damage)Matk",
              "scope": "Lv 10",
              "source": "Increases damage from 5000%/6500%(area damage)Matk to 11000%/13500%(area damage)Matk based on level 10."
            }
          ]
        },
        {
          "skillName": "Arbitrium",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/cardinal/rebalance_3.md",
          "section": "5.2",
          "notes": [
            "Reduces skill cooldown from 1.5 seconds to 1 second.",
            "Increases SP consumption from 112 to 125 based on level 10.",
            "Applies AP recovery rate by 2.",
            "Increases base damage of area damage from 12500%Matk to 17500%Matk based on level 10.",
            "Increases factor weight of Fidus Animus skill level in skill formula of area damage from 100 to 500 based on level 10.",
            "Increases factor weight of SPL in skill formula from 7 to 10."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "1.5 seconds",
              "after": "1 second",
              "scope": "",
              "source": "Reduces skill cooldown from 1.5 seconds to 1 second."
            },
            {
              "label": "SP Cost",
              "before": "112",
              "after": "125",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 112 to 125 based on level 10."
            },
            {
              "label": "Damage",
              "before": "12500%Matk (area damage)",
              "after": "17500%Matk (area damage)",
              "scope": "Lv 10",
              "source": "Increases base damage of area damage from 12500%Matk to 17500%Matk based on level 10."
            },
            {
              "label": "Factor Weight Of Fidus Animus Skill Level In Skill Formula Of Area Damage",
              "before": "100",
              "after": "500",
              "scope": "Lv 10",
              "source": "Increases factor weight of Fidus Animus skill level in skill formula of area damage from 100 to 500 based on level 10."
            },
            {
              "label": "Factor Weight Of Spl In Skill Formula",
              "before": "7",
              "after": "10",
              "scope": "",
              "source": "Increases factor weight of SPL in skill formula from 7 to 10."
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
      "id": 6518,
      "imageFile": "6518.png",
      "name": "Divinus Flos",
      "maxLevel": 5,
      "prerequisiteText": "Adoramus level 5, Framen level 5",
      "group": "Active",
      "type": "Magic",
      "target": "Single target",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Blooms a sacred flower that inflicts holy property magical damage to the target and surrounding enemies within 7 x 7 cells around the target.\nIf the user is under Ancilla buff, change the skill property to neutral.\nDeals additional damage depends on user's base level, SPL and level of Fidus Animus user learned.",
      "levelDetails": [
        {
          "level": 1,
          "text": "(4000 + (Fidus Animus level x 70))% Matk."
        },
        {
          "level": 2,
          "text": "(8000 + (Fidus Animus level x 70))% Matk."
        },
        {
          "level": 3,
          "text": "(12000 + (Fidus Animus level x 70))% Matk."
        },
        {
          "level": 4,
          "text": "(16000 + (Fidus Animus level x 70))% Matk."
        },
        {
          "level": 5,
          "text": "(20000 + (Fidus Animus level x 70))% Matk."
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "2 seconds",
      "castDelay": "0.85 seconds",
      "cooldown": "0.7 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6518.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6518",
      "tree": {
        "idx": 19,
        "row": 2,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 2040,
            "level": 5,
            "name": "Adoramus",
            "visible": false
          },
          {
            "id": 5284,
            "level": 5,
            "name": "Flamen",
            "visible": true
          }
        ]
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
            "value": "2 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.85 seconds"
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
            "value": "holy property magical damage"
          }
        ],
        "levelTables": []
      },
      "balanceNotes": [
        {
          "skillName": "Divinus Flos",
          "versionId": "rebalance-5",
          "versionLabel": "Rebalance 5",
          "file": "rebalances/cardinal/added_skills.md",
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
      "id": 5277,
      "imageFile": "5277.png",
      "name": "Effligo(Effligo)",
      "maxLevel": 10,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Melee Physics",
      "target": "Single Target",
      "recoversAp": "",
      "consumesAp": "12",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Blunt and book-only skills.\nDeals powerful Melee Physics damage to the target.\nDeals even more damage if the target is a demon/undead monster.\nDamage increases additionally based on the caster's base level and POW.\nCritical damage is applied based on the caster's critical probability.\nIn case of critical damage, half of the total critical damage increase options is applied.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 1650%/ 1800% (Demon, Undead)"
        },
        {
          "level": 2,
          "text": "ATK 3300%/ 3600% (Demon, Undead)"
        },
        {
          "level": 3,
          "text": "ATK 4950%/ 5400% (Demon, Undead)"
        },
        {
          "level": 4,
          "text": "ATK 6600%/ 7200% (Demon, Undead)"
        },
        {
          "level": 5,
          "text": "ATK 8250%/ 9000% (Demon, Undead)"
        },
        {
          "level": 6,
          "text": "ATK 9900%/ 10800% (Demon, Undead)"
        },
        {
          "level": 7,
          "text": "ATK 11550%/ 12600% (Demon, Undead)"
        },
        {
          "level": 8,
          "text": "ATK 13200%/ 14400% (Demon, Undead)"
        },
        {
          "level": 9,
          "text": "ATK 14850%/ 16200% (Demon, Undead)"
        },
        {
          "level": 10,
          "text": "ATK 16500%/ 18000% (Demon, Undead)"
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
      "iconUrl": "assets/divine-pride/skills/5277.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5277",
      "tree": {
        "idx": 20,
        "row": 2,
        "col": 6,
        "columns": 7,
        "requirements": [
          {
            "id": 2046,
            "level": 5,
            "name": "Oratio",
            "visible": false
          },
          {
            "id": 5283,
            "level": 10,
            "name": "Petitio",
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
                "id": "sp-cost",
                "label": "SP Cost"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "sp-cost": "75"
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
                  "sp-cost": "75"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "75"
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
                  "sp-cost": "75"
                }
              },
              {
                "level": 7,
                "values": {
                  "sp-cost": "75"
                }
              },
              {
                "level": 8,
                "values": {
                  "sp-cost": "75"
                }
              },
              {
                "level": 9,
                "values": {
                  "sp-cost": "75"
                }
              },
              {
                "level": 10,
                "values": {
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
          "skillName": "Effligo",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/cardinal/rebalance_2.md",
          "section": "9.6",
          "notes": [
            "Reduces cooldown from 60 seconds to 0.5 seconds.",
            "Removes 1 seconds delay after skill.",
            "Increases SP consumption from 60 to 75.",
            "Reduces AP consumption from 100 to 12.",
            "Increases damage from 8080%/12150%(demon and undead race)Atk to 16580%/18150%(demon and undead race)Atk based on level 10 (Mace & Book Mastery Level 10).",
            "Reduces factor weight of POW in skill formula from 10/10(demon and undead race) to 7/7(demon and undead race)."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "60 seconds",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces cooldown from 60 seconds to 0.5 seconds."
            },
            {
              "label": "Cast Delay",
              "before": "1 seconds delay",
              "after": "Removed",
              "scope": "",
              "source": "Removes 1 seconds delay after skill."
            },
            {
              "label": "SP Cost",
              "before": "60",
              "after": "75",
              "scope": "",
              "source": "Increases SP consumption from 60 to 75."
            },
            {
              "label": "AP Consumed",
              "before": "100",
              "after": "12",
              "scope": "",
              "source": "Reduces AP consumption from 100 to 12."
            },
            {
              "label": "Damage",
              "before": "8080%/12150%(demon and undead race)Atk",
              "after": "16580%/18150%(demon and undead race)Atk",
              "scope": "Lv 10 (Mace & Book Mastery Level 10)",
              "source": "Increases damage from 8080%/12150%(demon and undead race)Atk to 16580%/18150%(demon and undead race)Atk based on level 10 (Mace & Book Mastery Level 10)."
            },
            {
              "label": "Factor Weight Of Pow In Skill Formula",
              "before": "10/10(demon and undead race)",
              "after": "7/7(demon and undead race)",
              "scope": "",
              "source": "Reduces factor weight of POW in skill formula from 10/10(demon and undead race) to 7/7(demon and undead race)."
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
      "id": 5275,
      "imageFile": "5275.png",
      "name": "Presens Acies",
      "maxLevel": 5,
      "prerequisiteText": "Mediale Votum Lv. 3 and Repatatio Lv. 3",
      "group": "Active",
      "type": "Buff",
      "target": "You and party members",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Presens_Acies",
      "description": "Increase Critical damage rate for you or 1 party member.",
      "levelDetails": [],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "2 seconds",
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
              "value": "45"
            },
            {
              "level": 3,
              "value": "60"
            },
            {
              "level": 4,
              "value": "75"
            },
            {
              "level": 5,
              "value": "90"
            }
          ]
        }
      ],
      "spCost": "15 + (15 × Skill Level)",
      "duration": "90 + (30 × Skill Level) seconds",
      "translations": {
        "pt-BR": {
          "name": " Presens Acies ",
          "description": "Abençoa você ou 1 membro do seu grupo .\nAumenta o T.CRIT temporariamente.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Presens_Acies"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5275.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5275",
      "tree": {
        "idx": 21,
        "row": 3,
        "col": 0,
        "columns": 7,
        "requirements": [
          {
            "id": 5268,
            "level": 3,
            "name": "Repatatio",
            "visible": true
          },
          {
            "id": 5269,
            "level": 3,
            "name": "Mediale Votum",
            "visible": true
          }
        ]
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
            "value": "15 + (15 × Skill Level)"
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
            "value": "0 seconds"
          },
          {
            "label": "Target",
            "value": "You and party members"
          },
          {
            "label": "Duration",
            "value": "90 + (30 × Skill Level) seconds"
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
                  "sp-cost": "45"
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
                  "sp-cost": "75"
                }
              },
              {
                "level": 5,
                "values": {
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
        "status": "translated",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5272,
      "imageFile": "5272.png",
      "name": "Argutus Telum",
      "maxLevel": 5,
      "prerequisiteText": "Mediale Votum Lv. 3 and Repatatio Lv. 3",
      "group": "Active",
      "type": "Buff",
      "target": "You and Your Party",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Argutus_Telum",
      "description": "Enable you and 1 party member to ignore Physical Resistance.",
      "levelDetails": [],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "2 seconds",
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
              "value": "45"
            },
            {
              "level": 3,
              "value": "60"
            },
            {
              "level": 4,
              "value": "75"
            },
            {
              "level": 5,
              "value": "90"
            }
          ]
        }
      ],
      "spCost": "15 + (15 × Skill Level)",
      "duration": "90 + (30 × Skill Level) seconds",
      "translations": {
        "pt-BR": {
          "name": " Argutus Telum ",
          "description": "Abençoa você ou 1 membro do seu grupo para ignorar parte da TEN dos oponentes.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Argutus_Telum"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5272.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5272",
      "tree": {
        "idx": 22,
        "row": 3,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 5268,
            "level": 3,
            "name": "Repatatio",
            "visible": true
          },
          {
            "id": 5269,
            "level": 3,
            "name": "Mediale Votum",
            "visible": true
          }
        ]
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
            "value": "15 + (15 × Skill Level)"
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
            "value": "0 seconds"
          },
          {
            "label": "Target",
            "value": "You and Your Party"
          },
          {
            "label": "Duration",
            "value": "90 + (30 × Skill Level) seconds"
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
                  "sp-cost": "45"
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
                  "sp-cost": "75"
                }
              },
              {
                "level": 5,
                "values": {
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
        "status": "translated",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5271,
      "imageFile": "5271.png",
      "name": "Argutus Vita",
      "maxLevel": 5,
      "prerequisiteText": "Mediale Votum Lv. 3 and Repatatio Lv. 3",
      "group": "Active",
      "type": "Buff",
      "target": "You and Your Party",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Argutus_Vita",
      "description": "Enable you and 1 party member to ignore Magic Resistance.",
      "levelDetails": [],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "2 seconds",
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
              "value": "45"
            },
            {
              "level": 3,
              "value": "60"
            },
            {
              "level": 4,
              "value": "75"
            },
            {
              "level": 5,
              "value": "90"
            }
          ]
        }
      ],
      "spCost": "15 + (15 × Skill Level)",
      "duration": "90 + (30 × Skill Level) seconds",
      "translations": {
        "pt-BR": {
          "name": " Argutus Vita ",
          "description": "Abençoa você ou 1 membro do seu grupo para ignorar parte da TENM dos oponentes.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Argutus_Vita"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5271.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5271",
      "tree": {
        "idx": 23,
        "row": 3,
        "col": 2,
        "columns": 7,
        "requirements": [
          {
            "id": 5268,
            "level": 3,
            "name": "Repatatio",
            "visible": true
          },
          {
            "id": 5269,
            "level": 3,
            "name": "Mediale Votum",
            "visible": true
          }
        ]
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
            "value": "15 + (15 × Skill Level)"
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
            "value": "0 seconds"
          },
          {
            "label": "Target",
            "value": "You and Your Party"
          },
          {
            "label": "Duration",
            "value": "90 + (30 × Skill Level) seconds"
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
                  "sp-cost": "45"
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
                  "sp-cost": "75"
                }
              },
              {
                "level": 5,
                "values": {
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
        "status": "translated",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5279,
      "imageFile": "5279.png",
      "name": "Pneumaticus Procella(Pneumaticus Procella)",
      "maxLevel": 10,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Magic",
      "target": "1 cell ground target",
      "recoversAp": "",
      "consumesAp": "30",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Creates a storm of the Holy Spirit in the target area, inflicting Holy Magic damage to targets within the range every 3 seconds for 12 seconds.\nDeals even more damage if the target is a demon/undead monster.\nDamage increases further based on the caster's base level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 2250%/ 2450% (Demon, Undead)\nArea of effect : 5x5Cell"
        },
        {
          "level": 2,
          "text": "MATK 4350%/ 4700% (Demon, Undead)\nArea of effect : 5x5Cell"
        },
        {
          "level": 3,
          "text": "MATK 6450%/ 6950% (Demon, Undead)\nArea of effect : 5x5Cell"
        },
        {
          "level": 4,
          "text": "MATK 8550%/ 9200% (Demon, Undead)\nArea of effect : 7x7Cell"
        },
        {
          "level": 5,
          "text": "MATK 10650%/ 11450% (Demon, Undead)\nArea of effect : 7x7Cell"
        },
        {
          "level": 6,
          "text": "MATK 12750%/ 13700% (Demon, Undead)\nArea of effect : 7x7Cell"
        },
        {
          "level": 7,
          "text": "MATK 14850%/ 15950% (Demon, Undead)\nArea of effect : 9x9Cell"
        },
        {
          "level": 8,
          "text": "MATK 16950%/ 18200% (Demon, Undead)\nArea of effect : 9x9Cell"
        },
        {
          "level": 9,
          "text": "MATK 19050%/ 20450% (Demon, Undead)\nArea of effect : 9x9Cell"
        },
        {
          "level": 10,
          "text": "MATK 21150%/ 22700% (Demon, Undead)\nArea of effect : 11x11Cell"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "4 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "5 seconds",
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
      "iconUrl": "assets/divine-pride/skills/5279.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5279",
      "tree": {
        "idx": 25,
        "row": 3,
        "col": 4,
        "columns": 7,
        "requirements": [
          {
            "id": 5273,
            "level": 10,
            "name": "Arbitrium",
            "visible": true
          },
          {
            "id": 5284,
            "level": 5,
            "name": "Flamen",
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
            "value": "0.5 seconds"
          },
          {
            "label": "Cooldown",
            "value": "5 seconds"
          },
          {
            "label": "Target",
            "value": "1 cell ground target"
          },
          {
            "label": "AP Consumed",
            "value": "30"
          },
          {
            "label": "Pulse",
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
                "id": "area-of-effect",
                "label": "Area of Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "150"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "150"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "150"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "150"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "150"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "150"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "150"
                }
              },
              {
                "level": 8,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "150"
                }
              },
              {
                "level": 9,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "150"
                }
              },
              {
                "level": 10,
                "values": {
                  "area-of-effect": "11x11",
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
          "skillName": "Pneumaticus Procella",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/cardinal/rebalance_2.md",
          "section": "9.5",
          "notes": [
            "Reduces cooldown from 60 seconds to 5 seconds.",
            "Removes 1.5 seconds delay after skill.",
            "Reduces AP consumption from 150 to 30.",
            "Increases damage from 2030%/3050%(demon and undead race)Matk to 21180%/22750%(demon and undead race)Matk per hit based on level 10 (Fidus Animus level 10)."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "60 seconds",
              "after": "5 seconds",
              "scope": "",
              "source": "Reduces cooldown from 60 seconds to 5 seconds."
            },
            {
              "label": "Cast Delay",
              "before": "1.5 seconds delay",
              "after": "Removed",
              "scope": "",
              "source": "Removes 1.5 seconds delay after skill."
            },
            {
              "label": "AP Consumed",
              "before": "150",
              "after": "30",
              "scope": "",
              "source": "Reduces AP consumption from 150 to 30."
            },
            {
              "label": "Damage",
              "before": "2030%/3050%(demon and undead race)Matk",
              "after": "21180%/22750%(demon and undead race)Matk per hit",
              "scope": "Lv 10 (Fidus Animus level 10)",
              "source": "Increases damage from 2030%/3050%(demon and undead race)Matk to 21180%/22750%(demon and undead race)Matk per hit based on level 10 (Fidus Animus level 10)."
            }
          ]
        },
        {
          "skillName": "Pneumaticus Procella",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/cardinal/rebalance_4.md",
          "section": "5.2",
          "notes": [
            "Reduces AP consumption from 30 to 20.",
            "Changes damage property from holy to neutral.",
            "Addes global cooldown by 0.5 seconds.",
            "Changes sound effect."
          ],
          "specRows": [
            {
              "label": "AP Consumed",
              "before": "30",
              "after": "20",
              "scope": "",
              "source": "Reduces AP consumption from 30 to 20."
            },
            {
              "label": "Damage",
              "before": "holy (property)",
              "after": "neutral (property)",
              "scope": "",
              "source": "Changes damage property from holy to neutral."
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
      "id": 5278,
      "imageFile": "5278.png",
      "name": "Competentia(Competentia)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Recovery",
      "target": "Yourself and your party members",
      "recoversAp": "",
      "consumesAp": "200/190/180/170/160",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Recovers HP/SP of yourself and party members within range, and increases the target's characteristic physical attack power (P.ATK) and characteristic magic attack power (S.MATK) for a certain period of time.",
      "levelDetails": [
        {
          "level": 1,
          "text": "HP/SP 20% Recovery\nP.ATK and S.MATK + 10 / Duration: 180 seconds"
        },
        {
          "level": 2,
          "text": "HP/SP 40% Recovery\nP.ATK and S.MATK + 20 / Duration: 210 seconds"
        },
        {
          "level": 3,
          "text": "HP/SP 60% Recovery\nP.ATK and S.MATK + 30 / Duration: 240 seconds"
        },
        {
          "level": 4,
          "text": "HP/SP 80% Recovery\nP.ATK and S.MATK + 40 / Duration: 270 seconds"
        },
        {
          "level": 5,
          "text": "HP/SP 100% Recovery\nP.ATK and S.MATK + 50 / Duration: 300 seconds"
        }
      ],
      "fixedCastTime": "4 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "60 seconds",
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
      "iconUrl": "assets/divine-pride/skills/5278.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5278",
      "tree": {
        "idx": 29,
        "row": 4,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 5271,
            "level": 2,
            "name": "Argutus Vita",
            "visible": true
          },
          {
            "id": 5272,
            "level": 2,
            "name": "Argutus Telum",
            "visible": true
          },
          {
            "id": 5275,
            "level": 2,
            "name": "Presens Acies",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Recovery"
          },
          {
            "label": "Levels",
            "value": "5"
          },
          {
            "label": "Fixed Cast Time",
            "value": "4 seconds"
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
            "value": "Yourself and your party members"
          },
          {
            "label": "AP Consumed",
            "value": "200/190/180/170/160"
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
                  "effect": "HP / SP 20% Recovery",
                  "duration": "180 seconds",
                  "p-atk": "+ 10",
                  "s-matk": "+ 10",
                  "sp-cost": "60"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "HP / SP 40% Recovery",
                  "duration": "210 seconds",
                  "p-atk": "+ 20",
                  "s-matk": "+ 20",
                  "sp-cost": "60"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "HP / SP 60% Recovery",
                  "duration": "240 seconds",
                  "p-atk": "+ 30",
                  "s-matk": "+ 30",
                  "sp-cost": "60"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "HP / SP 80% Recovery",
                  "duration": "270 seconds",
                  "p-atk": "+ 40",
                  "s-matk": "+ 40",
                  "sp-cost": "60"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "HP / SP 100% Recovery",
                  "duration": "300 seconds",
                  "p-atk": "+ 50",
                  "s-matk": "+ 50",
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
          "skillName": "Competentia",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/cardinal/rebalance_2.md",
          "section": "9.4",
          "notes": [
            "Reduces AP consumption from 200 to 160 based on level 5.",
            "Increases duration from 240 seconds to 300 seconds based on level 5."
          ],
          "specRows": [
            {
              "label": "AP Consumed",
              "before": "200",
              "after": "160",
              "scope": "Lv 5",
              "source": "Reduces AP consumption from 200 to 160 based on level 5."
            },
            {
              "label": "Duration",
              "before": "240 seconds",
              "after": "300 seconds",
              "scope": "Lv 5",
              "source": "Increases duration from 240 seconds to 300 seconds based on level 5."
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

export default cardinalData;
