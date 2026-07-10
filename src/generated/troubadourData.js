export const troubadourData = {
  "generatedAt": "2026-07-10T18:52:56.594Z",
  "classId": 4263,
  "classSlug": "troubadour",
  "className": "Troubadour",
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
    "noteCount": 45,
    "addedSkills": 0,
    "versions": 4
  },
  "tree": {
    "columns": 7,
    "rows": 5,
    "skillTreeUrl": "https://www.divine-pride.net/tools/skilltree/4263",
    "jobIconUrl": "assets/divine-pride/jobs/4263.png"
  },
  "sources": {
    "rebalances": [
      "rebalances/troubadour/rebalance_1.md",
      "rebalances/troubadour/rebalance_2.md",
      "rebalances/troubadour/rebalance_3.md",
      "rebalances/troubadour/rebalance_4.md"
    ],
    "rebalanceManifest": "rebalances/manifest.json",
    "divinePrideApiDocs": "https://www.divine-pride.net/api",
    "divinePrideSkillTree": "https://www.divine-pride.net/tools/skilltree/4263",
    "browiki": "https://browiki.org",
    "irowiki": "https://irowiki.org/wiki/"
  },
  "rebalanceVersions": [
    {
      "id": "rebalance-1",
      "label": "Rebalance 1",
      "file": "rebalances/troubadour/rebalance_1.md",
      "heading": "12. Troubadour & Trouvere",
      "className": "Troubadour",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=9805",
      "scope": "main",
      "appliesTo": "Main classes only",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "12.1",
          "name": "Sound Blend",
          "notes": [
            "Removes fixed casting time based on level 5.",
            "Reduces variable casting time from 2 seconds to 1 second based on level 5.",
            "Reduces AP recovery rate from 3 to 2 based on level 5."
          ]
        },
        {
          "section": "12.2",
          "name": "Metallic Fury",
          "notes": [
            "Reduces cooldown from 1 second to 0.5 seconds based on level 5.",
            "Reduces AP recovery rate from 5 to 3 based on level 5.",
            "Increases damage from 3000%Matk to 4500%Matk based on level 5."
          ]
        },
        {
          "section": "12.3",
          "name": "Rhythm shooting",
          "notes": [
            "Reduces SP consumption from 128 to 90 based on level 5."
          ]
        },
        {
          "section": "12.4",
          "name": "Rose Blossom",
          "notes": [
            "Reduces cooldown from 3 seconds to 0.5 second based on level 5.",
            "Reduces SP consumption from 275 to 125 based on level 5.",
            "Reduces AP recovery rate from 5 to 3 based on level 5.",
            "Increases damage of the primary attack from 2500%Atk to 3750%Atk based on level 5.",
            "Increases damage of the secondary attack from 750%Atk to 1750%Atk based on level 5.",
            "Increases damage of the primary attack to the target marked with brand from 3250%Atk to 5000%Atk based on level 5.",
            "Increases damage of the secondary attack to the target marked with brand from 975%Atk to 3750%Atk based on level 5."
          ]
        },
        {
          "section": "12.5",
          "name": "Mystic Symphony",
          "notes": [
            "Increases damage bonus of Sound Blend, Rhythm Shooting and Rose blossom from 40% to 100%.",
            "Reduces cooldown from 120 seconds to 60 seconds.",
            "Increases duration from 60 seconds to 150 seconds.",
            "Increases AP consumption from 100 to 125."
          ]
        }
      ]
    },
    {
      "id": "rebalance-2",
      "label": "Rebalance 2",
      "file": "rebalances/troubadour/rebalance_2.md",
      "heading": "12. Troubadour & Trouvere",
      "className": "Troubadour",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=11126",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "12.1",
          "name": "Sound Blend",
          "notes": [
            "Reduces SP consumption from 128 to 80 based on level 5."
          ]
        },
        {
          "section": "12.2",
          "name": "Metallic Fury",
          "notes": [
            "Reduces cooldown from 0.5 seconds to 0.3 seconds.",
            "Reduces SP consumption from 168 to 94 based on level 5.",
            "Reduces AP recovery rate from 3 to 2 based on level 5.",
            "Increases damage from 4500%/4950~6750%(area damage according to number of branded target)Matk to 11000%/12500~18500%(area damage according to number of branded target)Matk based on level 5."
          ]
        },
        {
          "section": "12.3",
          "name": "Rhythm Shooting",
          "notes": [
            "Adds 0.15 seconds cooldown.",
            "Removes 0.15 seconds delay after skill.",
            "Reduces SP consumption from 90 to 52 based on level 5.",
            "Increases damage from 600%/780%(branded target)Atk to 800%/1400%(branded target)Atk based on level 5.",
            "Increases factor weight of CON in skill formula from 2 to 3."
          ]
        },
        {
          "section": "12.4",
          "name": "Rose Blossom",
          "notes": [
            "Reduces variable casting time from 2 seconds to 1 second.",
            "Increases cooldown from 0.5 seconds to 0.7 seconds.",
            "Reduces SP consumption from 125 to 94 based on level 5.",
            "Increases damage from 3750%/1750%(area damage)Atk to 11200%/15250%(area damage)Atk based on level 5.",
            "Increases factor weight of CON in skill formula from 3/2(area damage) to 3/3(area damage)."
          ]
        }
      ]
    },
    {
      "id": "rebalance-3",
      "label": "Rebalance 3",
      "file": "rebalances/troubadour/rebalance_3.md",
      "heading": "11. Troubadour & Trouvere",
      "className": "Troubadour",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=12421",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "11.1",
          "name": "Rhythm Shooting",
          "notes": [
            "Increases skill cooldown from 0.15 seconds to 0.35 seconds.",
            "Increases base damage from 800%/1400%Atk to 3700%/4550%Atk per hit based on level 5.",
            "Increases factor weight of CON in skill formula from 3 to 5 (7 on targets marked with sound brand)."
          ]
        },
        {
          "section": "11.2",
          "name": "Metallic Fury",
          "notes": [
            "Reworks skill to dealing damage to surrounding enemies around the target (9 x 9 cells based on level 5).",
            "Increases skill cooldown from 0.3 seconds to 0.4 seconds.",
            "Increases global cooldown from 0.3 seconds to 0.5 seconds.",
            "No longer remove sound brand debuff from target. (doesn't mention it changelog but it works)",
            "Increases base damage from 11000%Matk to 13000%/18000%(targets marked with sound brand)Matk based on level 5.",
            "Increases factor weight of SPL in skill formula (on targets marked with sound brand) from 1.5x of Stage Manner skill level to 2x of Stage Manner skill level."
          ]
        }
      ]
    },
    {
      "id": "rebalance-4",
      "label": "Rebalance 4",
      "file": "rebalances/troubadour/rebalance_4.md",
      "heading": "12. Troubadour & Trouvere",
      "className": "Troubadour",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=13917",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "12.1",
          "name": "Rhythm Shooting",
          "notes": [
            "Increases base damage from 3700%/4550%(sound brand)Atk to 5300%/6100%(sound brand)Atk per hit based on level 5."
          ]
        },
        {
          "section": "12.2",
          "name": "Metallic Fury",
          "notes": [
            "Increases base damage from 13000%/18000%(sound brand)Matk to 19250%/23250%(sound brand)Matk based on level 5.",
            "Changes sound effect."
          ]
        }
      ]
    }
  ],
  "addedSkills": [],
  "skillTabs": [
    {
      "id": "current",
      "label": "Troubadour",
      "pointLimit": 59,
      "tree": {
        "columns": 7,
        "rows": 5
      },
      "skills": [
        {
          "id": 5355,
          "imageFile": "5355.png",
          "name": "Rhythm Shooting",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single Target",
          "recoversAp": "1(1~3Lv), 2(4~5Lv)",
          "consumesAp": "",
          "ammunition": "1 Arrows",
          "irowikiUrl": "https://irowiki.org/wiki/Rhythm_Shooting",
          "description": "Musical instrument, bow and whip only skill.\nFires an arrow to single target, deals 3 hits of long ranged physical damage.\nDeals additional damage depends on user's base level.\nWhen learning Stage Manner, CON will affect additional damage too.\nDeals more damage against target marked with sound brand.\n(Doesn't remove sound brand from target).\nConsumes 1 equipped arrow.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK Per Hit 1100%/ 1550%(sound brand)"
            },
            {
              "level": 2,
              "text": "ATK Per Hit 1750%/ 2300%(sound brand)"
            },
            {
              "level": 3,
              "text": "ATK Per Hit 2400%/ 3050%(sound brand)"
            },
            {
              "level": 4,
              "text": "ATK Per Hit 3050%/ 3880%(sound brand)"
            },
            {
              "level": 5,
              "text": "ATK Per Hit 3700%/ 4550%(sound brand)"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0.35 seconds",
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
                }
              ]
            }
          ],
          "spCost": "60 + (Skill Level x 6)",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5355.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5355",
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
                "value": "60 + (Skill Level x 6)"
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
                "label": "Ammunition",
                "value": "1 Arrows"
              },
              {
                "label": "AP Generated",
                "value": "1(1~3Lv), 2(4~5Lv)"
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
                      "sp-cost": "36"
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
                      "sp-cost": "44"
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
                      "sp-cost": "52"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Rhythm shooting",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/troubadour/rebalance_1.md",
              "section": "12.3",
              "notes": [
                "Reduces SP consumption from 128 to 90 based on level 5."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "128",
                  "after": "90",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 128 to 90 based on level 5."
                }
              ]
            },
            {
              "skillName": "Rhythm Shooting",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/troubadour/rebalance_2.md",
              "section": "12.3",
              "notes": [
                "Adds 0.15 seconds cooldown.",
                "Removes 0.15 seconds delay after skill.",
                "Reduces SP consumption from 90 to 52 based on level 5.",
                "Increases damage from 600%/780%(branded target)Atk to 800%/1400%(branded target)Atk based on level 5.",
                "Increases factor weight of CON in skill formula from 2 to 3."
              ],
              "specRows": [
                {
                  "label": "Cast Delay",
                  "before": "0.15 seconds delay",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes 0.15 seconds delay after skill."
                },
                {
                  "label": "SP Cost",
                  "before": "90",
                  "after": "52",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 90 to 52 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "600%/780%(branded target)Atk",
                  "after": "800%/1400%(branded target)Atk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 600%/780%(branded target)Atk to 800%/1400%(branded target)Atk based on level 5."
                },
                {
                  "label": "Factor Weight Of Con In Skill Formula",
                  "before": "2",
                  "after": "3",
                  "scope": "",
                  "source": "Increases factor weight of CON in skill formula from 2 to 3."
                }
              ]
            },
            {
              "skillName": "Rhythm Shooting",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/troubadour/rebalance_3.md",
              "section": "11.1",
              "notes": [
                "Increases skill cooldown from 0.15 seconds to 0.35 seconds.",
                "Increases base damage from 800%/1400%Atk to 3700%/4550%Atk per hit based on level 5.",
                "Increases factor weight of CON in skill formula from 3 to 5 (7 on targets marked with sound brand)."
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
                  "label": "Damage",
                  "before": "800%/1400%Atk",
                  "after": "3700%/4550%Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 800%/1400%Atk to 3700%/4550%Atk per hit based on level 5."
                },
                {
                  "label": "Factor Weight Of Con In Skill Formula",
                  "before": "3",
                  "after": "5 (7 on targets marked with sound brand)",
                  "scope": "",
                  "source": "Increases factor weight of CON in skill formula from 3 to 5 (7 on targets marked with sound brand)."
                }
              ]
            },
            {
              "skillName": "Rhythm Shooting",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/troubadour/rebalance_4.md",
              "section": "12.1",
              "notes": [
                "Increases base damage from 3700%/4550%(sound brand)Atk to 5300%/6100%(sound brand)Atk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "3700%/4550%(sound brand)Atk",
                  "after": "5300%/6100%(sound brand)Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 3700%/4550%(sound brand)Atk to 5300%/6100%(sound brand)Atk per hit based on level 5."
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
          "id": 5349,
          "imageFile": "5349.png",
          "name": "Stage Etiquette",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Stage_Etiquette",
          "description": "Increase AP gain through your Troubadour/Trouvere Attack skills and improve certain Performance skills.\nInstruments, Bows, and Whips increase P. ATK and S. MATK.",
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
          "iconUrl": "assets/divine-pride/skills/5349.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5349",
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
          "id": 5357,
          "imageFile": "5357.png",
          "name": "Sound Blend(Sound Blend)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Magic",
          "target": "Single Target",
          "recoversAp": "1(1~3Lv), 2(4~5Lv)",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Instrument/Whip exclusive skills.\nLabels a single target with sound.\nAs the skill level increases, the duration of the brand increases.\nThe brand deals damage once before exploding, depending on the attribute of the arrow equipped by the caster.\nEnemies with a brand attached take more damage from vibration reverb, metallic sound, rose blossom, and rhythm shooting.\nDamage increases further based on the caster's base level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 120%/Duration: 10 seconds"
            },
            {
              "level": 2,
              "text": "MATK 240%/Duration: 10 seconds"
            },
            {
              "level": 3,
              "text": "MATK 360%/Duration: 15 seconds"
            },
            {
              "level": 4,
              "text": "MATK 480%/Duration: 15 seconds"
            },
            {
              "level": 5,
              "text": "MATK 600%/Duration: 20 seconds"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.15 seconds",
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5357.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5357",
          "tree": {
            "idx": 7,
            "row": 1,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 2413,
                "level": 5,
                "name": "Metallic Sound",
                "visible": false
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
                "value": "0.15 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
              },
              {
                "label": "Target",
                "value": "Single Target"
              },
              {
                "label": "AP Generated",
                "value": "1(1~3Lv), 2(4~5Lv)"
              }
            ],
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
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "10 seconds",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "15 seconds",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "15 seconds",
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "20 seconds",
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
              "skillName": "Sound Blend",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/troubadour/rebalance_1.md",
              "section": "12.1",
              "notes": [
                "Removes fixed casting time based on level 5.",
                "Reduces variable casting time from 2 seconds to 1 second based on level 5.",
                "Reduces AP recovery rate from 3 to 2 based on level 5."
              ],
              "specRows": [
                {
                  "label": "Fixed Casting Time Based On Level 5",
                  "before": "fi x ed casting time based on level 5",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes fixed casting time based on level 5."
                },
                {
                  "label": "Variable Casting Time",
                  "before": "2 seconds",
                  "after": "1 second",
                  "scope": "Lv 5",
                  "source": "Reduces variable casting time from 2 seconds to 1 second based on level 5."
                },
                {
                  "label": "AP Generated",
                  "before": "3",
                  "after": "2",
                  "scope": "Lv 5",
                  "source": "Reduces AP recovery rate from 3 to 2 based on level 5."
                }
              ]
            },
            {
              "skillName": "Sound Blend",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/troubadour/rebalance_2.md",
              "section": "12.1",
              "notes": [
                "Reduces SP consumption from 128 to 80 based on level 5."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "128",
                  "after": "80",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 128 to 80 based on level 5."
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
          "id": 5350,
          "imageFile": "5350.png",
          "name": "Retrospection",
          "maxLevel": 1,
          "prerequisiteText": "Stage Etiquette Lv. 1",
          "group": "Active",
          "type": "Support",
          "target": "Self",
          "recoversAp": "1",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Retrospection",
          "description": "Cast again the last Song skill you've used.\nThe recast skill consumes 30% less SP and gains 1.5 times the AP.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.3 seconds",
          "cooldown": "5 seconds",
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
          "spCost": "1",
          "duration": "seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5350.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5350",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5349,
                "level": 1,
                "name": "Stage Etiquette",
                "visible": true
              }
            ]
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
                "value": "0.3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "5 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "seconds"
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5358,
          "imageFile": "5358.png",
          "name": "Geffenia Nocturne",
          "maxLevel": 5,
          "prerequisiteText": "Stage Etiquette Lv. 3",
          "group": "Active",
          "type": "Debuff",
          "target": "Enemies within range",
          "recoversAp": "20",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Geffenia_Nocturne",
          "description": "An Instrument/Whip skill.\nCreate a chance of decreasing Magic Resistance for 30 seconds for Normal monsters and enemy players within range.\nThis skill's effect improves if a partner in your party is within your screen.\nConsumes 1 Throat Lozenge.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "10 seconds",
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
                  "value": "160"
                },
                {
                  "level": 3,
                  "value": "200"
                },
                {
                  "level": 4,
                  "value": "240"
                },
                {
                  "level": 5,
                  "value": "280"
                }
              ]
            }
          ],
          "spCost": "80 + (Skill Level x 40)",
          "duration": "30 seconds",
          "castRange": "15 x 15 ~ 23 x 23 cells",
          "areaOfEffect": "15 x 15 ~ 23 x 23",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5358.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5358",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5349,
                "level": 3,
                "name": "Stage Etiquette",
                "visible": true
              }
            ]
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
                "value": "80 + (Skill Level x 40)"
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
                "value": "10 seconds"
              },
              {
                "label": "Cast Range",
                "value": "15 x 15 ~ 23 x 23 cells"
              },
              {
                "label": "Target",
                "value": "Enemies within range"
              },
              {
                "label": "Area of Effect",
                "value": "15 x 15 ~ 23 x 23"
              },
              {
                "label": "Duration",
                "value": "30 seconds"
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
                      "sp-cost": "160"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "200"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "240"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "280"
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
          "id": 5360,
          "imageFile": "5360.png",
          "name": "Miner Rhapsody",
          "maxLevel": 5,
          "prerequisiteText": "Stage Etiquette Lv. 3",
          "group": "Active",
          "type": "Debuff",
          "target": "Enemies within range",
          "recoversAp": "20",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Miner_Rhapsody",
          "description": "An Instrument/Whip skill.\nCreate a chance of decreasing Physical Resistance for 30 seconds for Normal monsters and enemy players within range.\nThis skill's effect improves if a partner in your party is within your screen.\nConsumes 1 Throat Lozenge.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "10 seconds",
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
                  "value": "160"
                },
                {
                  "level": 3,
                  "value": "200"
                },
                {
                  "level": 4,
                  "value": "240"
                },
                {
                  "level": 5,
                  "value": "280"
                }
              ]
            }
          ],
          "spCost": "80 + (Skill Level x 40)",
          "duration": "30 seconds",
          "areaOfEffect": "15 x 15 ~ 23 x 23",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5360.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5360",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 5349,
                "level": 3,
                "name": "Stage Etiquette",
                "visible": true
              }
            ]
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
                "value": "80 + (Skill Level x 40)"
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
                "value": "10 seconds"
              },
              {
                "label": "Target",
                "value": "Enemies within range"
              },
              {
                "label": "Area of Effect",
                "value": "15 x 15 ~ 23 x 23"
              },
              {
                "label": "Duration",
                "value": "30 seconds"
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
                      "sp-cost": "160"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "200"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "240"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "280"
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
          "id": 5356,
          "imageFile": "5356.png",
          "name": "Metalic Fury",
          "maxLevel": 5,
          "prerequisiteText": "Sound Blend 1",
          "group": "Active",
          "type": "Magic",
          "target": "Single Target",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Musical instrument and whip only skill.\nFires the sonic magical arrow to single target, dealing magical damage to the target and surrounding enemies around the target.\nDeals higher damage against target marked with sound brand.\n(Doesn't remove sound brand from target).\nDeals additional damage depends on Stage Manner skill level, user's base level and SPL.\nThe skill property depends on the property of equipped arrow.\nConsumes 1 equipped arrow.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 2600%/3600%(sound brand)/Range: 5x5"
            },
            {
              "level": 2,
              "text": "MATK 5200%/7200%(sound brand)/Range: 5x5"
            },
            {
              "level": 3,
              "text": "MATK 7800%/10800%(sound brand)/Range: 5x5"
            },
            {
              "level": 4,
              "text": "MATK 10400%/14400%(sound brand)/Range: 7x7"
            },
            {
              "level": 5,
              "text": "MATK 13000%/18000%(sound brand)/Range: 9x9"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.4 seconds",
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
          "iconUrl": "assets/divine-pride/skills/5356.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5356",
          "tree": {
            "idx": 14,
            "row": 2,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 5357,
                "level": 1,
                "name": "Sound Blend",
                "visible": true
              }
            ]
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
                "value": "0.4 seconds"
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
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "82"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "88"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
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
              "skillName": "Metallic Fury",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/troubadour/rebalance_1.md",
              "section": "12.2",
              "notes": [
                "Reduces cooldown from 1 second to 0.5 seconds based on level 5.",
                "Reduces AP recovery rate from 5 to 3 based on level 5.",
                "Increases damage from 3000%Matk to 4500%Matk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 1 second to 0.5 seconds based on level 5."
                },
                {
                  "label": "AP Generated",
                  "before": "5",
                  "after": "3",
                  "scope": "Lv 5",
                  "source": "Reduces AP recovery rate from 5 to 3 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "3000%Matk",
                  "after": "4500%Matk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 3000%Matk to 4500%Matk based on level 5."
                }
              ]
            },
            {
              "skillName": "Metallic Fury",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/troubadour/rebalance_2.md",
              "section": "12.2",
              "notes": [
                "Reduces cooldown from 0.5 seconds to 0.3 seconds.",
                "Reduces SP consumption from 168 to 94 based on level 5.",
                "Reduces AP recovery rate from 3 to 2 based on level 5.",
                "Increases damage from 4500%/4950~6750%(area damage according to number of branded target)Matk to 11000%/12500~18500%(area damage according to number of branded target)Matk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.5 seconds",
                  "after": "0.3 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 0.5 seconds to 0.3 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "168",
                  "after": "94",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 168 to 94 based on level 5."
                },
                {
                  "label": "AP Generated",
                  "before": "3",
                  "after": "2",
                  "scope": "Lv 5",
                  "source": "Reduces AP recovery rate from 3 to 2 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "4500%/4950~6750%(area damage according",
                  "after": "number of branded target)Matk to 11000%/12500~18500%(area damage according to number of branded target)Matk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 4500%/4950~6750%(area damage according to number of branded target)Matk to 11000%/12500~18500%(area damage according to number of branded target)Matk based on level 5."
                }
              ]
            },
            {
              "skillName": "Metallic Fury",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/troubadour/rebalance_3.md",
              "section": "11.2",
              "notes": [
                "Reworks skill to dealing damage to surrounding enemies around the target (9 x 9 cells based on level 5).",
                "Increases skill cooldown from 0.3 seconds to 0.4 seconds.",
                "Increases global cooldown from 0.3 seconds to 0.5 seconds.",
                "No longer remove sound brand debuff from target. (doesn't mention it changelog but it works)",
                "Increases base damage from 11000%Matk to 13000%/18000%(targets marked with sound brand)Matk based on level 5.",
                "Increases factor weight of SPL in skill formula (on targets marked with sound brand) from 1.5x of Stage Manner skill level to 2x of Stage Manner skill level."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.3 seconds",
                  "after": "0.4 seconds",
                  "scope": "",
                  "source": "Increases skill cooldown from 0.3 seconds to 0.4 seconds."
                },
                {
                  "label": "Cooldown",
                  "before": "0.3 seconds",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Increases global cooldown from 0.3 seconds to 0.5 seconds."
                },
                {
                  "label": "Damage",
                  "before": "11000%Matk",
                  "after": "13000%/18000%(targets marked with sound brand)Matk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 11000%Matk to 13000%/18000%(targets marked with sound brand)Matk based on level 5."
                },
                {
                  "label": "Factor Weight Of Spl In Skill Formula (on Targets Marked With Sound Brand)",
                  "before": "1.5 x of Stage Manner skill level",
                  "after": "2 x of Stage Manner skill level",
                  "scope": "",
                  "source": "Increases factor weight of SPL in skill formula (on targets marked with sound brand) from 1.5x of Stage Manner skill level to 2x of Stage Manner skill level."
                }
              ]
            },
            {
              "skillName": "Metallic Fury",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/troubadour/rebalance_4.md",
              "section": "12.2",
              "notes": [
                "Increases base damage from 13000%/18000%(sound brand)Matk to 19250%/23250%(sound brand)Matk based on level 5.",
                "Changes sound effect."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "13000%/18000%(sound brand)Matk",
                  "after": "19250%/23250%(sound brand)Matk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 13000%/18000%(sound brand)Matk to 19250%/23250%(sound brand)Matk based on level 5."
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
          "id": 5353,
          "imageFile": "5353.png",
          "name": "Rose Blossom(Rose Blossom)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Ranged physical",
          "target": "Single Target",
          "recoversAp": "3",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Skills exclusive to instruments/bows/whips.\nPlant a flower seed in an arrow, dealing Ranged physical damage to a designated Single Target.\nAfter a certain amount of time, the target will bloom, dealing additional Ranged physical damage to the target and surrounding enemies.\nDamage increases additionally based on the caster's base level.\nLearn Stage Etiquette to further increase damage based on your CON.\nIf the target is affected by the sound branding effect from Sound Blend, it deals greater damage.\n(This effect does not remove the sound mark.)\nConsumes 1 equipped arrow.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 2200%/3050%(range)/range: 5x5\nSound mark: ATK 2400%/3250%(range)/range: 5x5"
            },
            {
              "level": 2,
              "text": "ATK 4200%/5850%(range)/range: 5x5\nSound mark: ATK 4600%/6250%(range)/range: 5x5"
            },
            {
              "level": 3,
              "text": "ATK 6200%/8650%(range)/range: 7x7\nSound mark: ATK 6800%/9250%(range)/range: 7x7"
            },
            {
              "level": 4,
              "text": "ATK 8200%/11450%(range)/range: 7x7\nSound mark: ATK 9000%/12250%(range)/range: 7x7"
            },
            {
              "level": 5,
              "text": "ATK 10200%/14250%(range)/range: 9x9\nSound mark: ATK 11200%/15250%(range)/range: 9x9"
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
          "iconUrl": "assets/divine-pride/skills/5353.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5353",
          "tree": {
            "idx": 15,
            "row": 2,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5355,
                "level": 3,
                "name": "Rhythm Shooting",
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
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "82"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "88"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
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
              "skillName": "Rose Blossom",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/troubadour/rebalance_1.md",
              "section": "12.4",
              "notes": [
                "Reduces cooldown from 3 seconds to 0.5 second based on level 5.",
                "Reduces SP consumption from 275 to 125 based on level 5.",
                "Reduces AP recovery rate from 5 to 3 based on level 5.",
                "Increases damage of the primary attack from 2500%Atk to 3750%Atk based on level 5.",
                "Increases damage of the secondary attack from 750%Atk to 1750%Atk based on level 5.",
                "Increases damage of the primary attack to the target marked with brand from 3250%Atk to 5000%Atk based on level 5.",
                "Increases damage of the secondary attack to the target marked with brand from 975%Atk to 3750%Atk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "3 seconds",
                  "after": "0.5 second",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 3 seconds to 0.5 second based on level 5."
                },
                {
                  "label": "SP Cost",
                  "before": "275",
                  "after": "125",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 275 to 125 based on level 5."
                },
                {
                  "label": "AP Generated",
                  "before": "5",
                  "after": "3",
                  "scope": "Lv 5",
                  "source": "Reduces AP recovery rate from 5 to 3 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "2500%Atk (primary attack)/750%Atk (secondary attack)/3250%Atk (primary attack to the target marked with brand)/975%Atk (secondary attack to the target marked with brand)",
                  "after": "3750%Atk (primary attack)/1750%Atk (secondary attack)/5000%Atk (primary attack to the target marked with brand)/3750%Atk (secondary attack to the target marked with brand)",
                  "scope": "Lv 5",
                  "source": "Increases damage of the primary attack from 2500%Atk to 3750%Atk based on level 5. / Increases damage of the secondary attack from 750%Atk to 1750%Atk based on level 5. / Increases damage of the primary attack to the target marked with brand from 3250%Atk to 5000%Atk based on level 5. / Increases damage of the secondary attack to the target marked with brand from 975%Atk to 3750%Atk based on level 5."
                }
              ]
            },
            {
              "skillName": "Rose Blossom",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/troubadour/rebalance_2.md",
              "section": "12.4",
              "notes": [
                "Reduces variable casting time from 2 seconds to 1 second.",
                "Increases cooldown from 0.5 seconds to 0.7 seconds.",
                "Reduces SP consumption from 125 to 94 based on level 5.",
                "Increases damage from 3750%/1750%(area damage)Atk to 11200%/15250%(area damage)Atk based on level 5.",
                "Increases factor weight of CON in skill formula from 3/2(area damage) to 3/3(area damage)."
              ],
              "specRows": [
                {
                  "label": "Variable Casting Time",
                  "before": "2 seconds",
                  "after": "1 second",
                  "scope": "",
                  "source": "Reduces variable casting time from 2 seconds to 1 second."
                },
                {
                  "label": "Cooldown",
                  "before": "0.5 seconds",
                  "after": "0.7 seconds",
                  "scope": "",
                  "source": "Increases cooldown from 0.5 seconds to 0.7 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "125",
                  "after": "94",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 125 to 94 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "3750%/1750%(area damage)Atk",
                  "after": "11200%/15250%(area damage)Atk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 3750%/1750%(area damage)Atk to 11200%/15250%(area damage)Atk based on level 5."
                },
                {
                  "label": "Factor Weight Of Con In Skill Formula",
                  "before": "3/2(area damage)",
                  "after": "3/3(area damage)",
                  "scope": "",
                  "source": "Increases factor weight of CON in skill formula from 3/2(area damage) to 3/3(area damage)."
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
          "id": 5362,
          "imageFile": "5362.png",
          "name": "Jawaii Serenade",
          "maxLevel": 5,
          "prerequisiteText": "Geffenia Nocturne Lv. 1",
          "group": "Active",
          "type": "Buff",
          "target": "You and party members",
          "recoversAp": "10",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Jawaii_Serenade",
          "description": "An Instrument/Whip skill.\nIncrease S. MATK and MSPD for 180 seconds for you and surrounding party members.\nThis skill's effect improves if a partner in your party is within your screen.\nConsumes 1 Throat Lozenge.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "10 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "140"
                },
                {
                  "level": 2,
                  "value": "150"
                },
                {
                  "level": 3,
                  "value": "160"
                },
                {
                  "level": 4,
                  "value": "170"
                },
                {
                  "level": 5,
                  "value": "180"
                }
              ]
            }
          ],
          "spCost": "130 + (Skill Level x 10)",
          "duration": "180 seconds",
          "areaOfEffect": "15 x 15 ~ 23 x 23",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5362.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5362",
          "tree": {
            "idx": 17,
            "row": 2,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5358,
                "level": 1,
                "name": "Geffenia Nocturne",
                "visible": true
              }
            ]
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
                "value": "130 + (Skill Level x 10)"
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
                "value": "10 seconds"
              },
              {
                "label": "Target",
                "value": "You and party members"
              },
              {
                "label": "Area of Effect",
                "value": "15 x 15 ~ 23 x 23"
              },
              {
                "label": "Duration",
                "value": "180 seconds"
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
                      "sp-cost": "140"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "160"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "170"
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5361,
          "imageFile": "5361.png",
          "name": "Musical Interlude",
          "maxLevel": 5,
          "prerequisiteText": "Miner Rhapsody Lv. 1",
          "group": "Active",
          "type": "Buff",
          "target": "You and party members",
          "recoversAp": "10",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Musical_Interlude",
          "description": "An Instrument/Whip skill.\nIncrease Physical Resistance for 180 seconds for you and surrounding party members.\nThis skill's effect improves if a partner in your party is within your screen.\nConsumes 1 Throat Lozenge.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "10 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "171"
                },
                {
                  "level": 2,
                  "value": "182"
                },
                {
                  "level": 3,
                  "value": "193"
                },
                {
                  "level": 4,
                  "value": "204"
                },
                {
                  "level": 5,
                  "value": "215"
                }
              ]
            }
          ],
          "spCost": "160 + (Skill Level x 11)",
          "duration": "180 seconds",
          "areaOfEffect": "15 x 15 ~ 23 x 23",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5361.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5361",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 5360,
                "level": 1,
                "name": "Miner Rhapsody",
                "visible": true
              }
            ]
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
                "value": "160 + (Skill Level x 11)"
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
                "value": "10 seconds"
              },
              {
                "label": "Target",
                "value": "You and party members"
              },
              {
                "label": "Area of Effect",
                "value": "15 x 15 ~ 23 x 23"
              },
              {
                "label": "Duration",
                "value": "180 seconds"
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
                      "sp-cost": "171"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "182"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "193"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "204"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "215"
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
          "id": 5364,
          "imageFile": "5364.png",
          "name": "Prontera March",
          "maxLevel": 5,
          "prerequisiteText": "Miner Rhapsody Lv. 1",
          "group": "Active",
          "type": "Buff",
          "target": "You and party members",
          "recoversAp": "10",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Prontera_March",
          "description": "An Instrument/Whip skill.\nIncrease P.ATK and MSPD for 180 seconds for you and surrounding party members.\nThis skill's effect improves if a partner in your party is within your screen.\nConsumes 1 Throat Lozenge.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "10 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "140"
                },
                {
                  "level": 2,
                  "value": "150"
                },
                {
                  "level": 3,
                  "value": "160"
                },
                {
                  "level": 4,
                  "value": "170"
                },
                {
                  "level": 5,
                  "value": "180"
                }
              ]
            }
          ],
          "spCost": "130 + (Skill Level x 10)",
          "duration": "180 seconds",
          "areaOfEffect": "15 x 15 ~ 23 x 23",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5364.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5364",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 5360,
                "level": 1,
                "name": "Miner Rhapsody",
                "visible": true
              }
            ]
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
                "value": "130 + (Skill Level x 10)"
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
                "value": "10 seconds"
              },
              {
                "label": "Target",
                "value": "You and party members"
              },
              {
                "label": "Area of Effect",
                "value": "15 x 15 ~ 23 x 23"
              },
              {
                "label": "Duration",
                "value": "180 seconds"
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
                      "sp-cost": "140"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "160"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "170"
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 6521,
          "imageFile": "6521.png",
          "name": "Rhythmical Wave",
          "maxLevel": 5,
          "prerequisiteText": "Metallic Fury 3",
          "group": "Active",
          "type": "Magic",
          "target": "Single target",
          "recoversAp": "3",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Musical instrument and whip exclusive skill.\nRadiates sonic magic to the target, dealing magical damage to the target and surrounding enemies around the target.\nIf Mystic Symphony buff is active, the skill will deal more damage.\nDeals additional damage depends on Stage Manner skill level, user's base level and SPL, the skill property depends on the property of equipped arrow.\nConsumes 1 equipped arrows.",
          "levelDetails": [
            {
              "level": 1,
              "text": "3900% Matk / 5100% Matk (Mystic Symphony) / area of effect: 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "7550% Matk / 9750% Matk (Mystic Symphony) / area of effect: 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "11200% Matk / 14400% Matk (Mystic Symphony) / area of effect: 7 x 7 cells."
            },
            {
              "level": 4,
              "text": "14850% Matk / 19050% Matk (Mystic Symphony) / area of effect: 7 x 7 cells."
            },
            {
              "level": 5,
              "text": "18500% Matk / 23700% Matk (Mystic Symphony) / area of effect: 9 x 9 cells."
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "2 seconds",
          "castDelay": "1 second",
          "cooldown": "0.4 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6521.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6521",
          "tree": {
            "idx": 21,
            "row": 3,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 5356,
                "level": 3,
                "name": "Metallic Fury",
                "visible": true
              }
            ]
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
                "value": "2 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "0.4 seconds"
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
          "id": 5351,
          "imageFile": "5351.png",
          "name": "Mystic Symphony",
          "maxLevel": 1,
          "prerequisiteText": "Metallic Fury Lv. 1 and Rose Blossom Lv. 5",
          "group": "Active (AP)",
          "type": "Buff",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "125",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Mystic_Symphony",
          "description": "An Instrument, Bow, and Whip skill.\nCast a buff that increases your Sound Blend, Rhythm Shooting, and Rose Blossom damage by 100% for 150 seconds.\nThis skill also increases your Physical/Magic damage on Fish and Demi-Human enemies for its duration.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Increase Sound Blend/Rhythm Shooting/Rose Blossom damage"
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
                  "value": "250"
                }
              ]
            }
          ],
          "spCost": "250",
          "duration": "150 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5351.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5351",
          "tree": {
            "idx": 22,
            "row": 3,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5353,
                "level": 5,
                "name": "Rose Blossom",
                "visible": true
              },
              {
                "id": 5356,
                "level": 1,
                "name": "Metallic Fury",
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
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "250"
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
                "value": "150 seconds"
              },
              {
                "label": "AP Consumed",
                "value": "125"
              }
            ],
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
                      "effect": "Increase Sound Blend / Rhythm Shooting / Rose Blossom damage",
                      "sp-cost": "250"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Mystic Symphony",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/troubadour/rebalance_1.md",
              "section": "12.5",
              "notes": [
                "Increases damage bonus of Sound Blend, Rhythm Shooting and Rose blossom from 40% to 100%.",
                "Reduces cooldown from 120 seconds to 60 seconds.",
                "Increases duration from 60 seconds to 150 seconds.",
                "Increases AP consumption from 100 to 125."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "40% (bonus of Sound Blend, Rhythm Shooting and Rose blossom)",
                  "after": "100% (bonus of Sound Blend, Rhythm Shooting and Rose blossom)",
                  "scope": "",
                  "source": "Increases damage bonus of Sound Blend, Rhythm Shooting and Rose blossom from 40% to 100%."
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
                },
                {
                  "label": "AP Consumed",
                  "before": "100",
                  "after": "125",
                  "scope": "",
                  "source": "Increases AP consumption from 100 to 125."
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
          "id": 5359,
          "imageFile": "5359.png",
          "name": "Loki Capriccio",
          "maxLevel": 5,
          "prerequisiteText": "Jawaii Serenade Lv. 1",
          "group": "Active",
          "type": "Debuff",
          "target": "Enemy players within range",
          "recoversAp": "20",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Loki_Capriccio",
          "description": "An Instrument/Whip skill.\nCreate a chance of Misfortune and Confusion on enemy players within range.\nThis skill's effect improves if a partner in your party is within your screen.\nFor PvP only.\nConsumes 1 Throat Lozenge.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "10 seconds",
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
                  "value": "160"
                },
                {
                  "level": 3,
                  "value": "200"
                },
                {
                  "level": 4,
                  "value": "240"
                },
                {
                  "level": 5,
                  "value": "280"
                }
              ]
            }
          ],
          "spCost": "80 + (Skill Level x 40)",
          "duration": "30 seconds",
          "areaOfEffect": "15 x 15 ~ 23 x 23",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5359.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5359",
          "tree": {
            "idx": 24,
            "row": 3,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5362,
                "level": 1,
                "name": "Jawaii Serenade",
                "visible": true
              }
            ]
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
                "value": "80 + (Skill Level x 40)"
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
                "value": "10 seconds"
              },
              {
                "label": "Target",
                "value": "Enemy players within range"
              },
              {
                "label": "Area of Effect",
                "value": "15 x 15 ~ 23 x 23"
              },
              {
                "label": "Duration",
                "value": "30 seconds"
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
                      "sp-cost": "160"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "200"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "240"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "280"
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
          "id": 5363,
          "imageFile": "5363.png",
          "name": "Nifflheim Requiem",
          "maxLevel": 5,
          "prerequisiteText": "Musical Interlude Lv. 1 and Prontera March Lv. 1",
          "group": "Active",
          "type": "Debuff",
          "target": "Enemy players within range",
          "recoversAp": "20",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Nifflheim_Requiem",
          "description": "An Instrument/Whip skill.\nCreate a chance of Depression and Curse on enemy players within range.\nThis skill's effect improves if a partner in your party is within your screen.\nFor PvP only.\nConsumes 1 Throat Lozenge.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "10 seconds",
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
                  "value": "160"
                },
                {
                  "level": 3,
                  "value": "200"
                },
                {
                  "level": 4,
                  "value": "240"
                },
                {
                  "level": 5,
                  "value": "280"
                }
              ]
            }
          ],
          "spCost": "80 + (Skill Level x 40)",
          "duration": "30 seconds",
          "areaOfEffect": "15 x 15 ~ 23 x 23",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5363.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5363",
          "tree": {
            "idx": 25,
            "row": 3,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 5361,
                "level": 1,
                "name": "Musical Interlude",
                "visible": true
              },
              {
                "id": 5364,
                "level": 1,
                "name": "Prontera March",
                "visible": true
              }
            ]
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
                "value": "80 + (Skill Level x 40)"
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
                "value": "10 seconds"
              },
              {
                "label": "Target",
                "value": "Enemy players within range"
              },
              {
                "label": "Area of Effect",
                "value": "15 x 15 ~ 23 x 23"
              },
              {
                "label": "Duration",
                "value": "30 seconds"
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
                      "sp-cost": "160"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "200"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "240"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "280"
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
          "id": 5352,
          "imageFile": "5352.png",
          "name": "Kvasir Sonata",
          "maxLevel": 1,
          "prerequisiteText": "Loki Capriccio Lv. 1 and Nifflheim Requiem Lv. 1",
          "group": "Active (AP)",
          "type": "Buff",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "100",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Kvasir_Sonata",
          "description": "An Instrument, Bow, and Whip skill.\nYou can use any Ensemble skills by yourself for 60 seconds.\nRequires a party.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "2 seconds",
          "castDelay": "0.15 seconds",
          "cooldown": "120 seconds",
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
          "spCost": "300",
          "duration": "60 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5352.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5352",
          "tree": {
            "idx": 31,
            "row": 4,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5359,
                "level": 1,
                "name": "Loki Capriccio",
                "visible": true
              },
              {
                "id": 5363,
                "level": 1,
                "name": "Nifflheim Requiem",
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
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "300"
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
                "value": "120 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "60 seconds"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "300"
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
      "label": "Minstrel",
      "pointLimit": 69,
      "tree": {
        "columns": 7,
        "rows": 7
      },
      "skills": [
        {
          "id": 2418,
          "imageFile": "2418.png",
          "name": "Severe Rainstorm",
          "maxLevel": 5,
          "prerequisiteText": "Throw Arrow Or Musical Strike 5",
          "group": "Active / Damage",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "10 Arrows",
          "irowikiUrl": "https://irowiki.org/wiki/Severe_Rainstorm",
          "description": "Bow, Whips, Instrument skill.\nShoots a volley of arrows into the air and rain down arrows on enemies in a 11 x 11 area, dealing damage 12 times.\nDamage increases based on BaseLv and AGI / DEX.\nConsumes 10 arrows, cannot be casted when caster has less than 10 arrow.\nDamage increases when whips or instrument is equipped.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 100%(Bow)/120%(Instrument/Whips)"
            },
            {
              "level": 2,
              "text": "ATK 200%(Bow)/240%(Instrument/Whips)"
            },
            {
              "level": 3,
              "text": "ATK 300%(Bow)/360%(Instrument/Whips)"
            },
            {
              "level": 4,
              "text": "ATK 400%(Bow)/480%(Instrument/Whips)"
            },
            {
              "level": 5,
              "text": "ATK 500%(Bow)/600%(Instrument/Whips)"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "castDelay": "1 second",
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
          "spCost": "70 + (Skill Level × 10)",
          "variableCastTime": "1 + (Skill Level × 0.5) seconds",
          "cooldown": "4.5 + (Skill Level × 0.5) seconds",
          "duration": "3.3 seconds",
          "castRange": "9 cells",
          "areaOfEffect": "11 x 11",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2418.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2418",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 316,
                "level": 5,
                "name": "Melody Strike",
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
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "70 + (Skill Level × 10)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "1 + (Skill Level × 0.5) seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "4.5 + (Skill Level × 0.5) seconds"
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
                "value": "11 x 11"
              },
              {
                "label": "Duration",
                "value": "3.3 seconds"
              },
              {
                "label": "Ammunition",
                "value": "10 Arrows"
              }
            ],
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "80",
                      "range": "9 cells",
                      "atk": "100",
                      "data-1": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "90",
                      "range": "9 cells",
                      "atk": "150",
                      "data-1": "12"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "100",
                      "range": "9 cells",
                      "atk": "200",
                      "data-1": "12"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "110",
                      "range": "9 cells",
                      "atk": "250",
                      "data-1": "12"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "120",
                      "range": "9 cells",
                      "atk": "300",
                      "data-1": "12"
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
          "id": 2414,
          "imageFile": "2414.png",
          "name": "Reverberation",
          "maxLevel": 5,
          "prerequisiteText": "Dissonance or Ugly Dance 5",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemies",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Reverberation",
          "description": "Skills for Whips and Instruments.\nShoots multiple arrows that generate high-frequency sound wave, and deals magical damage to all targets in 5 x 5 Area of Effect. Damage property follows the property of the equipped arrow.\nDamage increases as BaseLv increases.\nConsumes 5 arrows, cannot be casted when caster has less than 5 arrow.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1000%"
            },
            {
              "level": 2,
              "text": "MATK 1300%"
            },
            {
              "level": 3,
              "text": "MATK 1600%"
            },
            {
              "level": 4,
              "text": "MATK 1900%"
            },
            {
              "level": 5,
              "text": "MATK 2200%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.5 seconds",
          "cooldown": "0.15 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "56"
                },
                {
                  "level": 2,
                  "value": "62"
                },
                {
                  "level": 3,
                  "value": "68"
                },
                {
                  "level": 4,
                  "value": "74"
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
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "9000"
                },
                {
                  "level": 2,
                  "value": "10000"
                },
                {
                  "level": 3,
                  "value": "11000"
                },
                {
                  "level": 4,
                  "value": "12000"
                },
                {
                  "level": 5,
                  "value": "13000"
                }
              ]
            },
            {
              "label": "Data 2",
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
                }
              ]
            },
            {
              "label": "Data 3",
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
          "spCost": "50 + (Skill Level × 6)",
          "duration": "(Skill Level + 8) seconds",
          "castRange": "9 cells",
          "areaOfEffect": "5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2414.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2414",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 317,
                "level": 5,
                "name": "Unchained Serenade",
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
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "50 + (Skill Level × 6)"
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
                "value": "0.15 seconds"
              },
              {
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "Enemies"
              },
              {
                "label": "Area of Effect",
                "value": "5 x 5"
              },
              {
                "label": "Duration",
                "value": "(Skill Level + 8) seconds"
              }
            ],
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "56",
                      "range": "9 cells",
                      "data-1": "9000",
                      "data-2": "400",
                      "data-3": "200"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "62",
                      "range": "9 cells",
                      "data-1": "10000",
                      "data-2": "500",
                      "data-3": "300"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "68",
                      "range": "9 cells",
                      "data-1": "11000",
                      "data-2": "600",
                      "data-3": "400"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "74",
                      "range": "9 cells",
                      "data-1": "12000",
                      "data-2": "700",
                      "data-3": "500"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "80",
                      "range": "9 cells",
                      "data-1": "13000",
                      "data-2": "800",
                      "data-3": "600"
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
          "id": 2412,
          "imageFile": "2412.png",
          "name": "Voice Lessons",
          "maxLevel": 10,
          "prerequisiteText": "Wanderer/Maestro Basic Skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Voice_Lessons",
          "description": "Increases MaxSP and SP recovery\nfor each level learned.\nIf skill is level 5 or higher, allows the\nWanderer/Maestro to use Third Class skills\nwhile performing Second Class dances, songs,\nor ensembles",
          "levelDetails": [
            {
              "level": 1,
              "text": "MaxSP +30, recover 6 SP every 10 secs"
            },
            {
              "level": 2,
              "text": "MaxSP +60, recover 9 SP every 10 secs"
            },
            {
              "level": 3,
              "text": "MaxSP +90, recover 12 SP every 10 secs"
            },
            {
              "level": 4,
              "text": "MaxSP +120, recover 15 SP every 10 secs"
            },
            {
              "level": 5,
              "text": "MaxSP +150, recover 18 SP every 10 secs"
            },
            {
              "level": 6,
              "text": "MaxSP +180, recover 21 SP every 10 secs"
            },
            {
              "level": 7,
              "text": "MaxSP +200, recover 24 SP every 10 secs"
            },
            {
              "level": 8,
              "text": "MaxSP +240, recover 27 SP every 10 secs"
            },
            {
              "level": 9,
              "text": "MaxSP +270, recover 30 SP every 10 secs"
            },
            {
              "level": 10,
              "text": "MaxSP +300, recover 33 SP every 10 secs"
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
          "iconUrl": "assets/divine-pride/skills/2412.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2412",
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
                      "maxsp": "+30",
                      "effect": "recover 6 SP every 10 secs",
                      "sp-cost": "0",
                      "data-1": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "maxsp": "+60",
                      "effect": "recover 9 SP every 10 secs",
                      "sp-cost": "0",
                      "data-1": "60"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "maxsp": "+90",
                      "effect": "recover 12 SP every 10 secs",
                      "sp-cost": "0",
                      "data-1": "90"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "maxsp": "+120",
                      "effect": "recover 15 SP every 10 secs",
                      "sp-cost": "0",
                      "data-1": "120"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "maxsp": "+150",
                      "effect": "recover 18 SP every 10 secs",
                      "sp-cost": "0",
                      "data-1": "150"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "maxsp": "+180",
                      "effect": "recover 21 SP every 10 secs",
                      "sp-cost": "0",
                      "data-1": "180"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "maxsp": "+200",
                      "effect": "recover 24 SP every 10 secs",
                      "sp-cost": "0",
                      "data-1": "210"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "maxsp": "+240",
                      "effect": "recover 27 SP every 10 secs",
                      "sp-cost": "0",
                      "data-1": "240"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "maxsp": "+270",
                      "effect": "recover 30 SP every 10 secs",
                      "sp-cost": "0",
                      "data-1": "270"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "maxsp": "+300",
                      "effect": "recover 33 SP every 10 secs",
                      "sp-cost": "0",
                      "data-1": "300"
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
          "id": 2413,
          "imageFile": "2413.png",
          "name": "Metalic Sound",
          "maxLevel": 10,
          "prerequisiteText": "Reverberation 5",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Generates a high-frequency sound wave to 1 target and deals neutral magical damage. Deals more damage to enemies in sleep.\nDamage increases as BaseLv increases. Additional damage: Voice Lesson skill level x 60%.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 120% + Lesson level x 60%"
            },
            {
              "level": 2,
              "text": "MATK 240% + Lesson level x 60%"
            },
            {
              "level": 3,
              "text": "MATK 360% + Lesson level x 60%"
            },
            {
              "level": 4,
              "text": "MATK 480% + Lesson level x 60%"
            },
            {
              "level": 5,
              "text": "MATK 600% + Lesson level x 60%"
            },
            {
              "level": 6,
              "text": "MATK 720% + Lesson level x 60%"
            },
            {
              "level": 7,
              "text": "MATK 840% + Lesson level x 60%"
            },
            {
              "level": 8,
              "text": "MATK 960% + Lesson level x 60%"
            },
            {
              "level": 9,
              "text": "MATK1080% + Lesson level x 60%"
            },
            {
              "level": 10,
              "text": "MATK1200% + Lesson level x 60%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "2.5 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "62"
                },
                {
                  "level": 2,
                  "value": "64"
                },
                {
                  "level": 3,
                  "value": "66"
                },
                {
                  "level": 4,
                  "value": "68"
                },
                {
                  "level": 5,
                  "value": "70"
                },
                {
                  "level": 6,
                  "value": "72"
                },
                {
                  "level": 7,
                  "value": "74"
                },
                {
                  "level": 8,
                  "value": "76"
                },
                {
                  "level": 9,
                  "value": "78"
                },
                {
                  "level": 10,
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2413.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2413",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 2414,
                "level": 5,
                "name": "Reverberation",
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
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "2.5 seconds"
              }
            ],
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
                      "sp-cost": "62",
                      "range": "9 cells",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "64",
                      "range": "9 cells",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "66",
                      "range": "9 cells",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "68",
                      "range": "9 cells",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "70",
                      "range": "9 cells",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "72",
                      "range": "9 cells",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "74",
                      "range": "9 cells",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "76",
                      "range": "9 cells",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "MATK1080% + Lesson level x 60%",
                      "sp-cost": "78",
                      "range": "9 cells",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "MATK1200% + Lesson level x 60%",
                      "sp-cost": "80",
                      "range": "9 cells",
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
          "id": 2423,
          "imageFile": "2423.png",
          "name": "Circle of Nature",
          "maxLevel": 5,
          "prerequisiteText": "Voice Lessons 1",
          "group": "Active / Recovery",
          "type": "",
          "target": "Party member in range",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Circle_of_Nature",
          "description": "Display the power of the Circle of\nNature by increasing HP regeneration rate from all\nparty members within range.\nIncreasing range and skill effect as caster's skill level of Lesson additionally.\nAn instrument/whip is required to cast this skill.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Range 31 x 31 / HP regeneration rate +50%"
            },
            {
              "level": 2,
              "text": "Skill Range 31 x 31 / HP regeneration rate +100%"
            },
            {
              "level": 3,
              "text": "Skill Range 31 x 31 / HP regeneration rate +150%"
            },
            {
              "level": 4,
              "text": "Skill Range 31 x 31 / HP regeneration rate +200%"
            },
            {
              "level": 5,
              "text": "Skill Range 31 x 31 / HP regeneration rate +250%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.3 seconds",
          "cooldown": "180 seconds",
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
                  "value": "46"
                },
                {
                  "level": 3,
                  "value": "50"
                },
                {
                  "level": 4,
                  "value": "54"
                },
                {
                  "level": 5,
                  "value": "58"
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
              "label": "Data 3",
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
            }
          ],
          "spCost": "38 + (Skill Level × 4)",
          "duration": "1 minute",
          "areaOfEffect": "7 x 7 ~ 15 x 15",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2423.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2423",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2412,
                "level": 1,
                "name": "Voice Lessons",
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
                "value": "38 + (Skill Level × 4)"
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
                "value": "180 seconds"
              },
              {
                "label": "Target",
                "value": "Party member in range"
              },
              {
                "label": "Area of Effect",
                "value": "7 x 7 ~ 15 x 15"
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
                    "id": "data-4",
                    "label": "Data 4"
                  },
                  {
                    "id": "range",
                    "label": "Range"
                  },
                  {
                    "id": "skill-range-31-x-31-hp-regeneration-rate",
                    "label": "Skill Range 31 X 31 / Hp Regeneration Rate"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "skill-range-31-x-31-hp-regeneration-rate": "+50%",
                      "sp-cost": "42",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-2": "4",
                      "data-3": "40",
                      "data-4": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "skill-range-31-x-31-hp-regeneration-rate": "+100%",
                      "sp-cost": "46",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-2": "8",
                      "data-3": "80",
                      "data-4": "4"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "skill-range-31-x-31-hp-regeneration-rate": "+150%",
                      "sp-cost": "50",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-2": "12",
                      "data-3": "120",
                      "data-4": "5"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "skill-range-31-x-31-hp-regeneration-rate": "+200%",
                      "sp-cost": "54",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-2": "16",
                      "data-3": "160",
                      "data-4": "6"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "skill-range-31-x-31-hp-regeneration-rate": "+250%",
                      "sp-cost": "58",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-2": "20",
                      "data-3": "200",
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2422,
          "imageFile": "2422.png",
          "name": "Deep Sleep Lullaby",
          "maxLevel": 5,
          "prerequisiteText": "Voice Lessons 1",
          "group": "Active / Debuff",
          "type": "",
          "target": "Enemy Player and around",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Deep_Sleep_Lullaby",
          "description": "Force all targets in a certain range\ninto a 'Deep Sleep' state. Once, the targets are in\na 'Deep Sleep', they are unable to move, attack,\nuse items, skills or chat. The effect is cancelled\nif the targets receive damage. Targets in\n'Deep Sleep' will also take 1.5x greater damage\nfrom the next attack. Affected targets will also\nrecover 3% of HP/SP every 2 seconds.\nand consumes 2 Regrettable Tear.\nRequires an instrument/whip to cast.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Range 3 x 3"
            },
            {
              "level": 2,
              "text": "Range 3 x 3"
            },
            {
              "level": 3,
              "text": "Range 3 x 3"
            },
            {
              "level": 4,
              "text": "Range 5 x 5"
            },
            {
              "level": 5,
              "text": "Range 5 x 5"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.3 seconds",
          "cooldown": "30 seconds",
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
              "label": "Data 3",
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
            }
          ],
          "spCost": "70 + (Skill Level × 10)",
          "duration": "[10 + (Skill Level × 2)] seconds",
          "areaOfEffect": "11 x 11 ~ 19 x 19",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2422.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2422",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2412,
                "level": 1,
                "name": "Voice Lessons",
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
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "70 + (Skill Level × 10)"
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
                "value": "30 seconds"
              },
              {
                "label": "Target",
                "value": "Enemy Player and around"
              },
              {
                "label": "Area of Effect",
                "value": "11 x 11 ~ 19 x 19"
              },
              {
                "label": "Duration",
                "value": "[10 + (Skill Level × 2)] seconds"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Range 3 x 3",
                      "sp-cost": "80",
                      "data-1": "5",
                      "data-3": "12000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Range 3 x 3",
                      "sp-cost": "90",
                      "data-1": "6",
                      "data-3": "14000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Range 3 x 3",
                      "sp-cost": "100",
                      "data-1": "7",
                      "data-3": "16000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Range 5 x 5",
                      "sp-cost": "110",
                      "data-1": "8",
                      "data-3": "18000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Range 5 x 5",
                      "sp-cost": "120",
                      "data-1": "9",
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
          "id": 2419,
          "imageFile": "2419.png",
          "name": "Song of Despair",
          "maxLevel": 5,
          "prerequisiteText": "Voice Lessons 1",
          "group": "Active / Debuff",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Song_of_Despair",
          "description": "Generate a sound wave on the\nground that will immobilize 1 enemy within a\n3x3 area. A Maximum of 5 can be placed at the same\ntime. Does not work against MVP type monsters.\nRequires an instrument or whip to cast.\nConsumes 1 Throat Lozenge.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Effect Duration 8 sec. / Sound Wave Duration 9 sec."
            },
            {
              "level": 2,
              "text": "Effect Duration 10 sec. / Sound Wave Duration 11 sec."
            },
            {
              "level": 3,
              "text": "Effect Duration 12 sec. / Sound Wave Duration 13 sec."
            },
            {
              "level": 4,
              "text": "Effect Duration 14 sec. / Sound Wave Duration 15 sec."
            },
            {
              "level": 5,
              "text": "Effect Duration 16 sec. / Sound Wave Duration 17 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "3 seconds",
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
                  "value": "9000"
                },
                {
                  "level": 2,
                  "value": "11000"
                },
                {
                  "level": 3,
                  "value": "13000"
                },
                {
                  "level": 4,
                  "value": "15000"
                },
                {
                  "level": 5,
                  "value": "17000"
                }
              ]
            },
            {
              "label": "Data 2",
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
            }
          ],
          "spCost": "12",
          "castRange": "9 cells",
          "areaOfEffect": "3 x 3",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2419.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2419",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2412,
                "level": 1,
                "name": "Voice Lessons",
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
                "value": "5"
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
                      "effect": "Effect Duration 8 sec. / Sound Wave Duration 9 sec",
                      "sp-cost": "12",
                      "range": "9 cells",
                      "data-1": "9000",
                      "data-2": "8000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Effect Duration 10 sec. / Sound Wave Duration 11 sec",
                      "sp-cost": "16",
                      "range": "9 cells",
                      "data-1": "11000",
                      "data-2": "10000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Effect Duration 12 sec. / Sound Wave Duration 13 sec",
                      "sp-cost": "20",
                      "range": "9 cells",
                      "data-1": "13000",
                      "data-2": "12000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Effect Duration 14 sec. / Sound Wave Duration 15 sec",
                      "sp-cost": "24",
                      "range": "9 cells",
                      "data-1": "15000",
                      "data-2": "14000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Effect Duration 16 sec. / Sound Wave Duration 17 sec",
                      "sp-cost": "28",
                      "range": "9 cells",
                      "data-1": "17000",
                      "data-2": "16000"
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
          "id": 5007,
          "imageFile": "5007.png",
          "name": "Frigg's Song",
          "maxLevel": 5,
          "prerequisiteText": "Lesson 2",
          "group": "",
          "type": "Active / Buff",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Frigg's_Song",
          "description": "Increase MaxHP of\nallies for 60 sec and recover certain HP.\nConsumes 1 Regrettable Tears.\nin Siege mode such as PVP, only yourself and your party memeber will get the effect.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Affected area- Caster's near cell 7 x 7, MaxHP 5% increase, Per 1 sec, 100 recover."
            },
            {
              "level": 2,
              "text": "Affected area- Caster's near cell 9 x 9, MaxHP 10% increase, Per 1 sec, 120 recover."
            },
            {
              "level": 3,
              "text": "Affected area- Caster's near cell 11 x 11, MaxHP 15% increase, Per 1 sec, 140 recover."
            },
            {
              "level": 4,
              "text": "Affected area- Caster's near cell 13 x 13, MaxHP 20% increase, Per 1 sec, 160 recover."
            },
            {
              "level": 5,
              "text": "Affected area- Caster's near cell 15 x 15, MaxHP 25% increase, Per 1 sec, 180 recover."
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
          "spCost": "170 + (Skill Level × 30)",
          "duration": "1 minute",
          "areaOfEffect": "7 x 7 ~ 15 x 15",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5007.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5007",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2412,
                "level": 2,
                "name": "Voice Lessons",
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
                "value": "170 + (Skill Level × 30)"
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
                "label": "Area of Effect",
                "value": "7 x 7 ~ 15 x 15"
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
                      "effect": "Affected area- Caster's near cells 7 x 7, Ma x HP 5% increase, Per 1 sec, 100 recover",
                      "sp-cost": "200",
                      "data-1": "3",
                      "data-2": "5",
                      "data-3": "100"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Affected area- Caster's near cells 9 x 9, Ma x HP 10% increase, Per 1 sec, 120 recover",
                      "sp-cost": "230",
                      "data-1": "4",
                      "data-2": "10",
                      "data-3": "120"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Affected area- Caster's near cells 11 x 11, Ma x HP 15% increase, Per 1 sec, 140 recover",
                      "sp-cost": "260",
                      "data-1": "5",
                      "data-2": "15",
                      "data-3": "140"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Affected area- Caster's near cells 13 x 13, Ma x HP 20% increase, Per 1 sec, 160 recover",
                      "sp-cost": "290",
                      "data-1": "6",
                      "data-2": "20",
                      "data-3": "160"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Affected area- Caster's near cells 15 x 15, Ma x HP 25% increase, Per 1 sec, 180 recover",
                      "sp-cost": "320",
                      "data-1": "7",
                      "data-2": "25",
                      "data-3": "180"
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
          "id": 2426,
          "imageFile": "2426.png",
          "name": "Great Echo",
          "maxLevel": 5,
          "prerequisiteText": "Metallic Sound 1",
          "group": "Active / Damage / Chorus",
          "type": "",
          "target": "Player(Enemy), Monster",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Great_Echo",
          "description": "Caster creates a huge echo that inflicts damage to all targets in area of effect. Damage increases based on BaseLv and Voice Lesson level. Damage dealt will be doubled when the partner is in same party. Consumes 2 Throat Lozenge when using the skill.",
          "levelDetails": [
            {
              "level": 1,
              "text": "AoE 5 x 5 / ATK 750%"
            },
            {
              "level": 2,
              "text": "AoE 7 x 7 / ATK 1250%"
            },
            {
              "level": 3,
              "text": "AoE 7 x 7 / ATK 1750%"
            },
            {
              "level": 4,
              "text": "AoE 9 x 9 / ATK 2250%"
            },
            {
              "level": 5,
              "text": "AoE 9 x 9 / ATK 2750%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "castDelay": "0.3 seconds",
          "cooldown": "5 seconds",
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
                  "value": "1000"
                },
                {
                  "level": 2,
                  "value": "1100"
                },
                {
                  "level": 3,
                  "value": "1200"
                },
                {
                  "level": 4,
                  "value": "1300"
                },
                {
                  "level": 5,
                  "value": "1400"
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
                  "value": "3"
                },
                {
                  "level": 4,
                  "value": "4"
                },
                {
                  "level": 5,
                  "value": "4"
                }
              ]
            }
          ],
          "spCost": "120 − (Performers × 12)",
          "variableCastTime": "[1.8 + (Skill Level × 0.2)] seconds",
          "castRange": "9 cells",
          "areaOfEffect": "5 x 5 ~ 9 x 9",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2426.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2426",
          "tree": {
            "idx": 15,
            "row": 2,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 2413,
                "level": 1,
                "name": "Metallic Sound",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Damage / Chorus Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "120 − (Performers × 12)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "[1.8 + (Skill Level × 0.2)] seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.3 seconds"
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
                "value": "Player(Enemy), Monster"
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
                      "sp-cost": "80",
                      "range": "9 cells",
                      "atk": "1000",
                      "data-1": "2"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "90",
                      "range": "9 cells",
                      "atk": "1100",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "100",
                      "range": "9 cells",
                      "atk": "1200",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "110",
                      "range": "9 cells",
                      "atk": "1300",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "120",
                      "range": "9 cells",
                      "atk": "1400",
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
          "id": 2421,
          "imageFile": "2421.png",
          "name": "Death Valley",
          "maxLevel": 5,
          "prerequisiteText": "Circle of Nature 3",
          "group": "Active / Recovery",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Death_Valley",
          "description": "Recite a sacred poem to revive a\ndead companion. The revived player will have HP\nequal to the SP they had while dead. If the player\nhad 0 SP before revival, they will be has 1 HP.\nAn instrument/whip is required to cast this skill,\nand consumes 1 Regrettable Tear.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Chance of Success 90%\nConsume 50% SP from revival target"
            },
            {
              "level": 2,
              "text": "Chance of Success 92%\nConsume 40% SP from revival target"
            },
            {
              "level": 3,
              "text": "Chance of Success 94%\nConsume 30% SP from revival target"
            },
            {
              "level": 4,
              "text": "Chance of Success 96%\nConsume 20% SP from revival target"
            },
            {
              "level": 5,
              "text": "Chance of Success 98%\nConsume 10% SP from revival target"
            }
          ],
          "fixedCastTime": "1 second",
          "castDelay": "1 second",
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
                  "value": "53"
                },
                {
                  "level": 3,
                  "value": "56"
                },
                {
                  "level": 4,
                  "value": "59"
                },
                {
                  "level": 5,
                  "value": "62"
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
                  "value": "90"
                },
                {
                  "level": 2,
                  "value": "92"
                },
                {
                  "level": 3,
                  "value": "94"
                },
                {
                  "level": 4,
                  "value": "96"
                },
                {
                  "level": 5,
                  "value": "98"
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
                  "value": "40"
                },
                {
                  "level": 3,
                  "value": "30"
                },
                {
                  "level": 4,
                  "value": "20"
                },
                {
                  "level": 5,
                  "value": "10"
                }
              ]
            }
          ],
          "spCost": "47 + (Skill Level × 3)",
          "variableCastTime": "[3.5 − (Skill Level × 0.5)] seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2421.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2421",
          "tree": {
            "idx": 16,
            "row": 2,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2423,
                "level": 3,
                "name": "Circle of Nature",
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
                "value": "47 + (Skill Level × 3)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1 second"
              },
              {
                "label": "Variable Cast Time",
                "value": "[3.5 − (Skill Level × 0.5)] seconds"
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
                      "effect": "Chance of Success 90%\nConsume 50% SP from revival target",
                      "sp-cost": "50",
                      "range": "7 cells",
                      "data-1": "90",
                      "data-2": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Chance of Success 92%\nConsume 40% SP from revival target",
                      "sp-cost": "53",
                      "range": "7 cells",
                      "data-1": "92",
                      "data-2": "40"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Chance of Success 94%\nConsume 30% SP from revival target",
                      "sp-cost": "56",
                      "range": "7 cells",
                      "data-1": "94",
                      "data-2": "30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Chance of Success 96%\nConsume 20% SP from revival target",
                      "sp-cost": "59",
                      "range": "7 cells",
                      "data-1": "96",
                      "data-2": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Chance of Success 98%\nConsume 10% SP from revival target",
                      "sp-cost": "62",
                      "range": "7 cells",
                      "data-1": "98",
                      "data-2": "10"
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
          "id": 2420,
          "imageFile": "2420.png",
          "name": "Siren's Voice",
          "maxLevel": 5,
          "prerequisiteText": "Song of Despair 3",
          "group": "Active / Debuff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Siren's_Voice",
          "description": "Tempt all enemies that are within\nrange to fall hopelessly in love with the Caster.\nMonsters will be unable to attack or target the\ncaster with skills.\nAffected targets will display a 'Heart' emoticon.\nThe duration of this skill is reduced based on the\ntarget's base level and the skill is cancelled once\nthe target receives damage.\nAn instrument/whip is required to cast this skill.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Range 5 x 5 / Skill Duration 15 sec."
            },
            {
              "level": 2,
              "text": "Skill Range 7 x 7 / Skill Duration 18 sec."
            },
            {
              "level": 3,
              "text": "Skill Range 9 x 9 / Skill Duration 21 sec."
            },
            {
              "level": 4,
              "text": "Skill Range 11 x 11 / Skill Duration 24 sec."
            },
            {
              "level": 5,
              "text": "Skill Range 13 x 13 / Skill Duration 27 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "castDelay": "1 second",
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
                  "value": "56"
                },
                {
                  "level": 3,
                  "value": "64"
                },
                {
                  "level": 4,
                  "value": "72"
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
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "15000"
                },
                {
                  "level": 2,
                  "value": "18000"
                },
                {
                  "level": 3,
                  "value": "21000"
                },
                {
                  "level": 4,
                  "value": "24000"
                },
                {
                  "level": 5,
                  "value": "27000"
                }
              ]
            }
          ],
          "spCost": "40 + (Skill Level × 8)",
          "areaOfEffect": "5 x 5 ~ 13 x 13",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2420.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2420",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2419,
                "level": 3,
                "name": "Song of Despair",
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
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "40 + (Skill Level × 8)"
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
                "value": "5 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "5 x 5 ~ 13 x 13"
              }
            ],
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
                      "effect": "Skill Range 5 x 5 / Skill Duration 15 sec",
                      "sp-cost": "48",
                      "range": "1 cells",
                      "data-2": "2",
                      "data-3": "15000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Skill Range 7 x 7 / Skill Duration 18 sec",
                      "sp-cost": "56",
                      "range": "1 cells",
                      "data-2": "3",
                      "data-3": "18000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Skill Range 9 x 9 / Skill Duration 21 sec",
                      "sp-cost": "64",
                      "range": "1 cells",
                      "data-2": "4",
                      "data-3": "21000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Skill Range 11 x 11 / Skill Duration 24 sec",
                      "sp-cost": "72",
                      "range": "1 cells",
                      "data-2": "5",
                      "data-3": "24000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Skill Range 13 x 13 / Skill Duration 27 sec",
                      "sp-cost": "80",
                      "range": "1 cells",
                      "data-2": "6",
                      "data-3": "27000"
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
          "id": 2424,
          "imageFile": "2424.png",
          "name": "Improvised Song",
          "maxLevel": 5,
          "prerequisiteText": "Song of Despair 1",
          "group": "Active / Special",
          "type": "",
          "target": "All players except for caster",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Improvised_Song",
          "description": "Use unknown language to remove higher level chorus effect from targeted player. Success rate increases based on skill level.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Success rate: 40%"
            },
            {
              "level": 2,
              "text": "Success rate: 50%"
            },
            {
              "level": 3,
              "text": "Success rate: 60%"
            },
            {
              "level": 4,
              "text": "Success rate: 70%"
            },
            {
              "level": 5,
              "text": "Success rate: 80%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.3 seconds",
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
          "spCost": "40",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2424.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2424",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2419,
                "level": 1,
                "name": "Song of Despair",
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
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "40"
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
                "value": "0.3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "5 seconds"
              },
              {
                "label": "Target",
                "value": "All players except for caster"
              }
            ],
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
                      "effect": "Success rate: 40%",
                      "sp-cost": "20",
                      "range": "9 cells",
                      "data-1": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Success rate: 50%",
                      "sp-cost": "20",
                      "range": "9 cells",
                      "data-1": "6"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Success rate: 60%",
                      "sp-cost": "20",
                      "range": "9 cells",
                      "data-1": "7"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Success rate: 70%",
                      "sp-cost": "20",
                      "range": "9 cells",
                      "data-1": "8"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Success rate: 80%",
                      "sp-cost": "20",
                      "range": "9 cells",
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
          "id": 2383,
          "imageFile": "2383.png",
          "name": "Harmonize",
          "maxLevel": 5,
          "prerequisiteText": "Deep Sleep Lullaby 1",
          "group": "Active / Buff",
          "type": "",
          "target": "Any entity",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Harmonize",
          "description": "Enter a state of harmony with\nanother player or monster. Equalize all bonus\nstats of caster and 1 target for 60 seconds.\nRequires an instrument to cast.",
          "levelDetails": [
            {
              "level": 1,
              "text": "All bonus stats become 3-5"
            },
            {
              "level": 2,
              "text": "All bonus stats become 5-7"
            },
            {
              "level": 3,
              "text": "All bonus stats become 7-9"
            },
            {
              "level": 4,
              "text": "All bonus stats become 9-11"
            },
            {
              "level": 5,
              "text": "All bonus stats become 11-15"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
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
          "spCost": "65 + (Skill Level × 5)",
          "duration": "1 minute",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2383.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2383",
          "tree": {
            "idx": 23,
            "row": 3,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2422,
                "level": 1,
                "name": "Deep Sleep Lullaby",
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
                "value": "65 + (Skill Level × 5)"
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
                "value": "5 seconds"
              },
              {
                "label": "Target",
                "value": "Any entity"
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
                    "id": "all-bonus-stats-become-11",
                    "label": "All Bonus Stats Become 11"
                  },
                  {
                    "id": "all-bonus-stats-become-3",
                    "label": "All Bonus Stats Become 3"
                  },
                  {
                    "id": "all-bonus-stats-become-5",
                    "label": "All Bonus Stats Become 5"
                  },
                  {
                    "id": "all-bonus-stats-become-7",
                    "label": "All Bonus Stats Become 7"
                  },
                  {
                    "id": "all-bonus-stats-become-9",
                    "label": "All Bonus Stats Become 9"
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
                      "all-bonus-stats-become-3": "-5",
                      "sp-cost": "70",
                      "range": "9 cells",
                      "data-1": "60000",
                      "data-2": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "all-bonus-stats-become-5": "-7",
                      "sp-cost": "75",
                      "range": "9 cells",
                      "data-1": "60000",
                      "data-2": "15"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "all-bonus-stats-become-7": "-9",
                      "sp-cost": "80",
                      "range": "9 cells",
                      "data-1": "60000",
                      "data-2": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "all-bonus-stats-become-9": "-11",
                      "sp-cost": "85",
                      "range": "9 cells",
                      "data-1": "60000",
                      "data-2": "25"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "all-bonus-stats-become-11": "-15",
                      "sp-cost": "90",
                      "range": "9 cells",
                      "data-1": "60000",
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
          "id": 2381,
          "imageFile": "2381.png",
          "name": "Windmill Rush",
          "maxLevel": 5,
          "prerequisiteText": "Deep Sleep Lullaby 1",
          "group": "Active / Buff",
          "type": "",
          "target": "Party members in area",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Windmill_Rush",
          "description": "Instrument Weapon Skill. 31 X 31 Cell, increases party member's ATK and movement speed. It does not overlap with other Minstrel's Instrumental Skill and can only be used when caster's equipping instruments. Effect increases bassd on Lesson level.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK + 7, increases based on caster's Lesson level."
            },
            {
              "level": 2,
              "text": "ATK + 10, increases based on caster's Lesson level."
            },
            {
              "level": 3,
              "text": "ATK + 13, increases based on caster's Lesson level."
            },
            {
              "level": 4,
              "text": "ATK + 15, increases based on caster's Lesson level."
            },
            {
              "level": 5,
              "text": "ATK + 20, increases based on caster's Lesson level."
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "3 seconds",
          "castDelay": "0.3 seconds",
          "cooldown": "10 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "82"
                },
                {
                  "level": 2,
                  "value": "88"
                },
                {
                  "level": 3,
                  "value": "94"
                },
                {
                  "level": 4,
                  "value": "100"
                },
                {
                  "level": 5,
                  "value": "106"
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
              "label": "Data 3",
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
                }
              ]
            }
          ],
          "spCost": "76 + (Skill Level × 6)",
          "duration": "3 minute",
          "areaOfEffect": "15 x 15 ~ 23 x 23",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2381.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2381",
          "tree": {
            "idx": 24,
            "row": 3,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2422,
                "level": 1,
                "name": "Deep Sleep Lullaby",
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
                "value": "76 + (Skill Level × 6)"
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
                "value": "0.3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "10 seconds"
              },
              {
                "label": "Target",
                "value": "Party members in area"
              },
              {
                "label": "Area of Effect",
                "value": "15 x 15 ~ 23 x 23"
              },
              {
                "label": "Duration",
                "value": "3 minute"
              }
            ],
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
                      "atk": "+ 7",
                      "effect": "increases based on caster's Lesson level",
                      "sp-cost": "82",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-3": "7"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "atk": "+ 10",
                      "effect": "increases based on caster's Lesson level",
                      "sp-cost": "88",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-3": "8"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "atk": "+ 13",
                      "effect": "increases based on caster's Lesson level",
                      "sp-cost": "94",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-3": "9"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "atk": "+ 15",
                      "effect": "increases based on caster's Lesson level",
                      "sp-cost": "100",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-3": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "atk": "+ 20",
                      "effect": "increases based on caster's Lesson level",
                      "sp-cost": "106",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-3": "11"
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
          "id": 2382,
          "imageFile": "2382.png",
          "name": "Echo Song",
          "maxLevel": 5,
          "prerequisiteText": "Deep Sleep Lullaby 1",
          "group": "Active / Buff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Echo_Song",
          "description": "Increases the defense of the caster\nand party members for 60 seconds. This is\nincreased by 1% per level of Voice Lessons and\nby 0.2% per Job Level of the caster.\nRequires an instrument to cast.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Def +6% / Skill Range 15 x 15"
            },
            {
              "level": 2,
              "text": "Def +12% / Skill Range 17 x 17"
            },
            {
              "level": 3,
              "text": "Def +18% / Skill Range 19 x 19"
            },
            {
              "level": 4,
              "text": "Def +24% / Skill Range 21 x 21"
            },
            {
              "level": 5,
              "text": "Def +30% / Skill Range 23 x 23"
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
                  "value": "86"
                },
                {
                  "level": 2,
                  "value": "92"
                },
                {
                  "level": 3,
                  "value": "98"
                },
                {
                  "level": 4,
                  "value": "104"
                },
                {
                  "level": 5,
                  "value": "110"
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
              "label": "Data 3",
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
                }
              ]
            }
          ],
          "spCost": "?",
          "duration": "1 minute",
          "areaOfEffect": "15 x 15 ~ 23 x 23",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2382.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2382",
          "tree": {
            "idx": 25,
            "row": 3,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2422,
                "level": 1,
                "name": "Deep Sleep Lullaby",
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
                "label": "Area of Effect",
                "value": "15 x 15 ~ 23 x 23"
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
                    "id": "def",
                    "label": "Def"
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
                      "def": "+6%",
                      "effect": "Skill Range 15 x 15",
                      "sp-cost": "86",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-3": "7"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "def": "+12%",
                      "effect": "Skill Range 17 x 17",
                      "sp-cost": "92",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-3": "8"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "def": "+18%",
                      "effect": "Skill Range 19 x 19",
                      "sp-cost": "98",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-3": "9"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "def": "+24%",
                      "effect": "Skill Range 21 x 21",
                      "sp-cost": "104",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-3": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "def": "+30%",
                      "effect": "Skill Range 23 x 23",
                      "sp-cost": "110",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-3": "11"
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
          "id": 2425,
          "imageFile": "2425.png",
          "name": "Gloomy Shyness",
          "maxLevel": 5,
          "prerequisiteText": "Improvised Song 1",
          "group": "Active / Buff",
          "type": "",
          "target": "Enemy Player",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Gloomy_Shyness",
          "description": "Increase Enemy Player's SP consumption and fixed casting time.\nSometimes too much depression reduces moving speed.\nAnd sometimes the riding Pecopeco, Dragon or Gryphon can run away.\nThis skill is available only on PvP area.\nRequires an instrument/whip to cast.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Fixed Casting Time +0.5sec / SP consumption +10%"
            },
            {
              "level": 2,
              "text": "Fixed Casting Time +1.0sec / SP consumption +20%"
            },
            {
              "level": 3,
              "text": "Fixed Casting Time +1.5sec / SP consumption +30%"
            },
            {
              "level": 4,
              "text": "Fixed Casting Time +2.0sec / SP consumption +40%"
            },
            {
              "level": 5,
              "text": "Fixed Casting Time +2.5sec / SP consumption +50%"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "0.5 seconds",
          "castDelay": "0.3 seconds",
          "cooldown": "60 seconds",
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
                  "value": "46"
                },
                {
                  "level": 3,
                  "value": "50"
                },
                {
                  "level": 4,
                  "value": "54"
                },
                {
                  "level": 5,
                  "value": "58"
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
          "spCost": "60",
          "duration": "60 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2425.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2425",
          "tree": {
            "idx": 26,
            "row": 3,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2424,
                "level": 1,
                "name": "Improvised Song",
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
                "value": "60"
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
                "value": "0.3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "60 seconds"
              },
              {
                "label": "Target",
                "value": "Enemy Player"
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
                    "id": "fixed-casting-time-0-5sec-sp-consumption",
                    "label": "Fixed Casting Time +0.5sec / Sp Consumption"
                  },
                  {
                    "id": "fixed-casting-time-1-0sec-sp-consumption",
                    "label": "Fixed Casting Time +1.0sec / Sp Consumption"
                  },
                  {
                    "id": "fixed-casting-time-1-5sec-sp-consumption",
                    "label": "Fixed Casting Time +1.5sec / Sp Consumption"
                  },
                  {
                    "id": "fixed-casting-time-2-0sec-sp-consumption",
                    "label": "Fixed Casting Time +2.0sec / Sp Consumption"
                  },
                  {
                    "id": "fixed-casting-time-2-5sec-sp-consumption",
                    "label": "Fixed Casting Time +2.5sec / Sp Consumption"
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
                      "fixed-casting-time-0-5sec-sp-consumption": "+10%",
                      "sp-cost": "42",
                      "range": "9 cells",
                      "data-1": "25",
                      "data-2": "20",
                      "data-3": "30000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "fixed-casting-time-1-0sec-sp-consumption": "+20%",
                      "sp-cost": "46",
                      "range": "9 cells",
                      "data-1": "30",
                      "data-2": "25",
                      "data-3": "45000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "fixed-casting-time-1-5sec-sp-consumption": "+30%",
                      "sp-cost": "50",
                      "range": "9 cells",
                      "data-1": "35",
                      "data-2": "30",
                      "data-3": "60000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "fixed-casting-time-2-0sec-sp-consumption": "+40%",
                      "sp-cost": "54",
                      "range": "9 cells",
                      "data-1": "40",
                      "data-2": "35",
                      "data-3": "75000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "fixed-casting-time-2-5sec-sp-consumption": "+50%",
                      "sp-cost": "58",
                      "range": "9 cells",
                      "data-1": "45",
                      "data-2": "40",
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2428,
          "imageFile": "2428.png",
          "name": "Dances with Wargs",
          "maxLevel": 5,
          "prerequisiteText": "Harmonize / Swing Dance,",
          "group": "Active / Buff / Chorus",
          "type": "",
          "target": "Party member in range",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Dances_with_Wargs",
          "description": "Reduces self and party member's\nFixed Cast Time and increases ASPD.\nAnd increase party member's ranged physical attack, and attack using Warg as well.\nConsume 1 [Throat Lozenge].\nRequires an instrument/whip to cast.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Range 11 x 11 / Fixed Casting Time -30%, ASPD +5%, Ranged Damage +1%"
            },
            {
              "level": 2,
              "text": "Skill Range 13 x 13 / Fixed Casting Time -40%, ASPD +10%, Ranged Damage +2%"
            },
            {
              "level": 3,
              "text": "Skill Range 15 x 15 / Fixed Casting Time -50%, ASPD +15%, Ranged Damage +3%"
            },
            {
              "level": 4,
              "text": "Skill Range 17 x 17 / Fixed Casting Time -60%, ASPD +20%, Ranged Damage +4%"
            },
            {
              "level": 5,
              "text": "Skill Range 19 x 19 / Fixed Casting Time -70%, ASPD +25%, Ranged Damage +5%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.3 seconds",
          "cooldown": "180 seconds",
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
                  "value": "30000"
                },
                {
                  "level": 2,
                  "value": "60000"
                },
                {
                  "level": 3,
                  "value": "90000"
                },
                {
                  "level": 4,
                  "value": "120000"
                },
                {
                  "level": 5,
                  "value": "150000"
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
            }
          ],
          "spCost": "100 + 20 x Skill Level",
          "duration": "120 seconds",
          "areaOfEffect": "11 x 11 ~ 19 x 19",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2428.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2428",
          "tree": {
            "idx": 30,
            "row": 4,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2381,
                "level": 1,
                "name": "Windmill Rush",
                "visible": true
              },
              {
                "id": 2382,
                "level": 1,
                "name": "Echo Song",
                "visible": true
              },
              {
                "id": 2383,
                "level": 1,
                "name": "Harmonize",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Buff / Chorus Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "100 + 20 x Skill Level"
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
                "value": "180 seconds"
              },
              {
                "label": "Target",
                "value": "Party member in range"
              },
              {
                "label": "Area of Effect",
                "value": "11 x 11 ~ 19 x 19"
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
                    "id": "aspd",
                    "label": "Aspd"
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
                  },
                  {
                    "id": "ranged-damage",
                    "label": "Ranged Damage"
                  },
                  {
                    "id": "skill-range-11-x-11-fixed-casting-time",
                    "label": "Skill Range 11 X 11 / Fixed Casting Time"
                  },
                  {
                    "id": "skill-range-13-x-13-fixed-casting-time",
                    "label": "Skill Range 13 X 13 / Fixed Casting Time"
                  },
                  {
                    "id": "skill-range-15-x-15-fixed-casting-time",
                    "label": "Skill Range 15 X 15 / Fixed Casting Time"
                  },
                  {
                    "id": "skill-range-17-x-17-fixed-casting-time",
                    "label": "Skill Range 17 X 17 / Fixed Casting Time"
                  },
                  {
                    "id": "skill-range-19-x-19-fixed-casting-time",
                    "label": "Skill Range 19 X 19 / Fixed Casting Time"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "skill-range-11-x-11-fixed-casting-time": "-30%",
                      "aspd": "+5%",
                      "ranged-damage": "+1%",
                      "sp-cost": "120",
                      "range": "1 cells",
                      "data-1": "30000",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "skill-range-13-x-13-fixed-casting-time": "-40%",
                      "aspd": "+10%",
                      "ranged-damage": "+2%",
                      "sp-cost": "140",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-2": "6"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "skill-range-15-x-15-fixed-casting-time": "-50%",
                      "aspd": "+15%",
                      "ranged-damage": "+3%",
                      "sp-cost": "160",
                      "range": "1 cells",
                      "data-1": "90000",
                      "data-2": "7"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "skill-range-17-x-17-fixed-casting-time": "-60%",
                      "aspd": "+20%",
                      "ranged-damage": "+4%",
                      "sp-cost": "180",
                      "range": "1 cells",
                      "data-1": "120000",
                      "data-2": "8"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "skill-range-19-x-19-fixed-casting-time": "-70%",
                      "aspd": "+25%",
                      "ranged-damage": "+5%",
                      "sp-cost": "200",
                      "range": "1 cells",
                      "data-1": "150000",
                      "data-2": "9"
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
          "id": 2427,
          "imageFile": "2427.png",
          "name": "Song Of Mana",
          "maxLevel": 5,
          "prerequisiteText": "Harmonize / Swing Dance,",
          "group": "Active / Buff / Chorus",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "The caster and at least one other\nWanderer/Maestro in the party, sing for Mana,\nasking for increased circulation. Recovers % of MaxSP\nof the caster and party members and increase SP regeneration rate.\nSP recovery amount and regeneration speed is increased based on the skill level of Lesson.\nConsume 1 [Throat Lozenge].\nRequires an instrument/whip to cast.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Range 11 x 11 / Recovery 10% of MaxSP / SP regeneration rate +50%"
            },
            {
              "level": 2,
              "text": "Skill Range 13 x 13 / Recovery 10% of MaxSP / SP regeneration rate +100%"
            },
            {
              "level": 3,
              "text": "Skill Range 15 x 15 / Recovery 15% of MaxSP / SP regeneration rate +150%"
            },
            {
              "level": 4,
              "text": "Skill Range 17 x 17 / Recovery 15% of MaxSP / SP regeneration rate +200%"
            },
            {
              "level": 5,
              "text": "Skill Range 19 x 19 / Recovery 20% of MaxSP / SP regeneration rate +250%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.3 seconds",
          "cooldown": "20 seconds",
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
                  "value": "30000"
                },
                {
                  "level": 2,
                  "value": "60000"
                },
                {
                  "level": 3,
                  "value": "90000"
                },
                {
                  "level": 4,
                  "value": "120000"
                },
                {
                  "level": 5,
                  "value": "150000"
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2427.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2427",
          "tree": {
            "idx": 31,
            "row": 4,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2381,
                "level": 1,
                "name": "Windmill Rush",
                "visible": true
              },
              {
                "id": 2382,
                "level": 1,
                "name": "Echo Song",
                "visible": true
              },
              {
                "id": 2383,
                "level": 1,
                "name": "Harmonize",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Buff / Chorus Skill"
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
                "value": "0.3 seconds"
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
                  },
                  {
                    "id": "skill-range-11-x-11-recovery-10-of-maxsp-sp-regeneration-rate",
                    "label": "Skill Range 11 X 11 / Recovery 10% Of MaxSP / Sp Regeneration Rate"
                  },
                  {
                    "id": "skill-range-13-x-13-recovery-10-of-maxsp-sp-regeneration-rate",
                    "label": "Skill Range 13 X 13 / Recovery 10% Of MaxSP / Sp Regeneration Rate"
                  },
                  {
                    "id": "skill-range-15-x-15-recovery-15-of-maxsp-sp-regeneration-rate",
                    "label": "Skill Range 15 X 15 / Recovery 15% Of MaxSP / Sp Regeneration Rate"
                  },
                  {
                    "id": "skill-range-17-x-17-recovery-15-of-maxsp-sp-regeneration-rate",
                    "label": "Skill Range 17 X 17 / Recovery 15% Of MaxSP / Sp Regeneration Rate"
                  },
                  {
                    "id": "skill-range-19-x-19-recovery-20-of-maxsp-sp-regeneration-rate",
                    "label": "Skill Range 19 X 19 / Recovery 20% Of MaxSP / Sp Regeneration Rate"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "skill-range-11-x-11-recovery-10-of-maxsp-sp-regeneration-rate": "+50%",
                      "sp-cost": "120",
                      "range": "1 cells",
                      "data-1": "30000",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "skill-range-13-x-13-recovery-10-of-maxsp-sp-regeneration-rate": "+100%",
                      "sp-cost": "140",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-2": "6"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "skill-range-15-x-15-recovery-15-of-maxsp-sp-regeneration-rate": "+150%",
                      "sp-cost": "160",
                      "range": "1 cells",
                      "data-1": "90000",
                      "data-2": "7"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "skill-range-17-x-17-recovery-15-of-maxsp-sp-regeneration-rate": "+200%",
                      "sp-cost": "180",
                      "range": "1 cells",
                      "data-1": "120000",
                      "data-2": "8"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "skill-range-19-x-19-recovery-20-of-maxsp-sp-regeneration-rate": "+250%",
                      "sp-cost": "200",
                      "range": "1 cells",
                      "data-1": "150000",
                      "data-2": "9"
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
          "id": 2431,
          "imageFile": "2431.png",
          "name": "Lerad's Dew",
          "maxLevel": 5,
          "prerequisiteText": "Swing Dance/Harmonize,",
          "group": "Active / Buff / Chorus",
          "type": "",
          "target": "Party member in range",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Lerad's_Dew",
          "description": "When sung by the caster at least\none other Wanderer/Maestro in the party, Lerad's\nDew will increase the MaxHP of all surrounding\nparty members. This skill does not affect\ncharacters who are in Frenzy.\nIncreasing MaxHP as caster's skill level of Lesson additionally.\nConsume 1 [Throat Lozenge].\nRequires an instrument/whip to cast.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Range 11x11 / MaxHP +5%"
            },
            {
              "level": 2,
              "text": "Range 11x11 / MaxHP +8%"
            },
            {
              "level": 3,
              "text": "Range 13x13 / MaxHP +11%"
            },
            {
              "level": 4,
              "text": "Range 13x13 / MaxHP +14%"
            },
            {
              "level": 5,
              "text": "Range 15x15 / MaxHP +17%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.3 seconds",
          "cooldown": "20 seconds",
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
                  "value": "5"
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
                  "value": "6"
                },
                {
                  "level": 5,
                  "value": "7"
                }
              ]
            },
            {
              "label": "Data 4",
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
          "spCost": "?",
          "duration": "[10 + (Skill Level × 10)] seconds",
          "areaOfEffect": "11 x 11 ~ 15 x 15",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2431.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2431",
          "tree": {
            "idx": 32,
            "row": 4,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2381,
                "level": 1,
                "name": "Windmill Rush",
                "visible": true
              },
              {
                "id": 2382,
                "level": 1,
                "name": "Echo Song",
                "visible": true
              },
              {
                "id": 2383,
                "level": 1,
                "name": "Harmonize",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Buff / Chorus Skill"
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
                "value": "20 seconds"
              },
              {
                "label": "Target",
                "value": "Party member in range"
              },
              {
                "label": "Area of Effect",
                "value": "11 x 11 ~ 15 x 15"
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
                    "id": "data-1",
                    "label": "Data 1"
                  },
                  {
                    "id": "data-2",
                    "label": "Data 2"
                  },
                  {
                    "id": "data-4",
                    "label": "Data 4"
                  },
                  {
                    "id": "range",
                    "label": "Range"
                  },
                  {
                    "id": "range-11x11-maxhp",
                    "label": "Range 11x11 / MaxHP"
                  },
                  {
                    "id": "range-13x13-maxhp",
                    "label": "Range 13x13 / MaxHP"
                  },
                  {
                    "id": "range-15x15-maxhp",
                    "label": "Range 15x15 / MaxHP"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "range-11x11-maxhp": "+5%",
                      "sp-cost": "80",
                      "range": "1 cells",
                      "data-1": "20000",
                      "data-2": "5",
                      "data-4": "200"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "range-11x11-maxhp": "+8%",
                      "sp-cost": "90",
                      "range": "1 cells",
                      "data-1": "30000",
                      "data-2": "5",
                      "data-4": "400"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "range-13x13-maxhp": "+11%",
                      "sp-cost": "100",
                      "range": "1 cells",
                      "data-1": "40000",
                      "data-2": "6",
                      "data-4": "600"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "range-13x13-maxhp": "+14%",
                      "sp-cost": "110",
                      "range": "1 cells",
                      "data-1": "50000",
                      "data-2": "6",
                      "data-4": "800"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "range-15x15-maxhp": "+17%",
                      "sp-cost": "120",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-2": "7",
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
          "id": 2430,
          "imageFile": "2430.png",
          "name": "Saturday Night Fever",
          "maxLevel": 5,
          "prerequisiteText": "Dances with Wargs 1",
          "group": "Active / Special / Chorus",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Saturday_Night_Fever",
          "description": "When sung by the caster and at\nleast one other Maestro/Wanderer, all players in\nrange of the caster will be compelled to disco\nand enter a limited Frenzy state. Frenzied\ntargets will continuously lose HP and SP as well\nas lose Flee and Hit. Item\nusage is disabled, and those affected will be\nforced to sit on the ground for 3 seconds after\nthe Frenzy wears off.\nIncreasing success rate as caster's skill level of Lesson additionally.\nConsume 5 [Throat Lozenge].\nOnly usable in PVP/WoE\nRequires an instrument/whip to cast.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Range 9x9 / HIT -100 / FLEE -50"
            },
            {
              "level": 2,
              "text": "Skill Range 9x9 / HIT -150 / FLEE -80"
            },
            {
              "level": 3,
              "text": "Skill Range 11x11 / HIT -200 / FLEE -110"
            },
            {
              "level": 4,
              "text": "Skill Range 11x11 / HIT -250 / FLEE -140"
            },
            {
              "level": 5,
              "text": "Skill Range 13x13 / HIT -300 / FLEE -170"
            }
          ],
          "fixedCastTime": "3 seconds",
          "variableCastTime": "3 seconds",
          "castDelay": "0.3 seconds",
          "cooldown": "60 seconds",
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
                  "value": "160"
                },
                {
                  "level": 3,
                  "value": "170"
                },
                {
                  "level": 4,
                  "value": "180"
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
          "spCost": "170 − (Performers × 17)",
          "duration": "[5 + (Skill Level × 5)] seconds",
          "areaOfEffect": "7 x 7 ~ 15 x 15",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2430.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2430",
          "tree": {
            "idx": 37,
            "row": 5,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2428,
                "level": 1,
                "name": "Dances with Wargs",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Special / Chorus Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "170 − (Performers × 17)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "3 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "3 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.3 seconds"
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
                "label": "Area of Effect",
                "value": "7 x 7 ~ 15 x 15"
              },
              {
                "label": "Duration",
                "value": "[5 + (Skill Level × 5)] seconds"
              }
            ],
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
                    "id": "flee",
                    "label": "Flee"
                  },
                  {
                    "id": "range",
                    "label": "Range"
                  },
                  {
                    "id": "skill-range-11x11-hit",
                    "label": "Skill Range 11x11 / Hit"
                  },
                  {
                    "id": "skill-range-13x13-hit",
                    "label": "Skill Range 13x13 / Hit"
                  },
                  {
                    "id": "skill-range-9x9-hit",
                    "label": "Skill Range 9x9 / Hit"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "skill-range-9x9-hit": "-100",
                      "flee": "-50",
                      "sp-cost": "150",
                      "range": "1 cells",
                      "data-1": "10000",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "skill-range-9x9-hit": "-150",
                      "flee": "-80",
                      "sp-cost": "160",
                      "range": "1 cells",
                      "data-1": "15000",
                      "data-2": "4"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "skill-range-11x11-hit": "-200",
                      "flee": "-110",
                      "sp-cost": "170",
                      "range": "1 cells",
                      "data-1": "20000",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "skill-range-11x11-hit": "-250",
                      "flee": "-140",
                      "sp-cost": "180",
                      "range": "1 cells",
                      "data-1": "25000",
                      "data-2": "6"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "skill-range-13x13-hit": "-300",
                      "flee": "-170",
                      "sp-cost": "190",
                      "range": "1 cells",
                      "data-1": "30000",
                      "data-2": "7"
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
          "id": 2432,
          "imageFile": "2432.png",
          "name": "Sinking Melody",
          "maxLevel": 5,
          "prerequisiteText": "Song Of Mana 1",
          "group": "Active / Buff / Chorus",
          "type": "",
          "target": "Enemy player in range",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Sinking_Melody",
          "description": "Decrease MaxSP and INT of enemy players around the caster.\nIncreasing success rate as caster's skill level of Lesson additionally.\nConsume 2 [Throat Lozenge].\nOnly usable in PVP/WoE\nRequires an instrument/whip to cast.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Success Chance 10% / Increasing Caster's skill level of Lesson additionally.000000"
            },
            {
              "level": 2,
              "text": "Success Chance 15% / Increasing Caster's skill level of Lesson additionally."
            },
            {
              "level": 3,
              "text": "Success Chance 20% / Increasing Caster's skill level of Lesson additionally."
            },
            {
              "level": 4,
              "text": "Success Chance 25% / Increasing Caster's skill level of Lesson additionally."
            },
            {
              "level": 5,
              "text": "Success Chance 30% / Increasing Caster's skill level of Lesson additionally."
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "3 seconds",
          "castDelay": "0.3 seconds",
          "cooldown": "20 seconds",
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
                },
                {
                  "level": 5,
                  "value": "160"
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
                  "value": "5"
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
                  "value": "6"
                },
                {
                  "level": 5,
                  "value": "7"
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
          "spCost": "?",
          "duration": "10 + (Skill Level × 10) seconds",
          "areaOfEffect": "11 x 11 ~ 15 x 15",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2432.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2432",
          "tree": {
            "idx": 38,
            "row": 5,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2427,
                "level": 1,
                "name": "Song Of Mana",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Buff / Chorus Skill"
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
                "value": "1 second"
              },
              {
                "label": "Variable Cast Time",
                "value": "3 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "20 seconds"
              },
              {
                "label": "Target",
                "value": "Enemy player in range"
              },
              {
                "label": "Area of Effect",
                "value": "11 x 11 ~ 15 x 15"
              },
              {
                "label": "Duration",
                "value": "10 + (Skill Level × 10) seconds"
              }
            ],
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
                      "effect": "Success Chance 10% / Increasing Caster's skill level of Lesson additionally.000000",
                      "sp-cost": "120",
                      "range": "1 cells",
                      "data-1": "20000",
                      "data-2": "5",
                      "data-3": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Success Chance 15% / Increasing Caster's skill level of Lesson additionally",
                      "sp-cost": "130",
                      "range": "1 cells",
                      "data-1": "30000",
                      "data-2": "5",
                      "data-3": "25"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Success Chance 20% / Increasing Caster's skill level of Lesson additionally",
                      "sp-cost": "140",
                      "range": "1 cells",
                      "data-1": "40000",
                      "data-2": "6",
                      "data-3": "30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Success Chance 25% / Increasing Caster's skill level of Lesson additionally",
                      "sp-cost": "150",
                      "range": "1 cells",
                      "data-1": "50000",
                      "data-2": "6",
                      "data-3": "35"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Success Chance 30% / Increasing Caster's skill level of Lesson additionally",
                      "sp-cost": "160",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-2": "7",
                      "data-3": "40"
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
          "id": 2433,
          "imageFile": "2433.png",
          "name": "Warcry from Beyond",
          "maxLevel": 5,
          "prerequisiteText": "Lerad's Dew 1",
          "group": "Active / Buff / Chorus",
          "type": "",
          "target": "Enemy player in range",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Warcry_from_Beyond",
          "description": "Decrease MaxHP and STR of enemy players around the caster.\nIncreasing success rate and skill effect as caster's skill level of Lesson additionally.\nConsume 2 [Throat Lozenge].\nOnly usable in PVP/WoE\nRequires an instrument/whip to cast.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Success Chance 15% / Increasing Caster's skill level of Lesson additionally."
            },
            {
              "level": 2,
              "text": "Success Chance 18% / Increasing Caster's skill level of Lesson additionally."
            },
            {
              "level": 3,
              "text": "Success Chance 21% / Increasing Caster's skill level of Lesson additionally."
            },
            {
              "level": 4,
              "text": "Success Chance 24% / Increasing Caster's skill level of Lesson additionally."
            },
            {
              "level": 5,
              "text": "Success Chance 27% / Increasing Caster's skill level of Lesson additionally."
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "3 seconds",
          "castDelay": "0.3 seconds",
          "cooldown": "20 seconds",
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
                },
                {
                  "level": 5,
                  "value": "160"
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
                  "value": "5"
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
                  "value": "6"
                },
                {
                  "level": 5,
                  "value": "7"
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
          "spCost": "200 − (Performers × 20)",
          "duration": "[10 + (Skill Level × 10)] seconds",
          "areaOfEffect": "11 x 11 ~ 15 x 15",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2433.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2433",
          "tree": {
            "idx": 39,
            "row": 5,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2431,
                "level": 1,
                "name": "Lerad's Dew",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Buff / Chorus Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "200 − (Performers × 20)"
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
                "value": "0.3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "20 seconds"
              },
              {
                "label": "Target",
                "value": "Enemy player in range"
              },
              {
                "label": "Area of Effect",
                "value": "11 x 11 ~ 15 x 15"
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
                      "effect": "Success Chance 15% / Increasing Caster's skill level of Lesson additionally",
                      "sp-cost": "120",
                      "range": "1 cells",
                      "data-1": "20000",
                      "data-2": "5",
                      "data-3": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Success Chance 18% / Increasing Caster's skill level of Lesson additionally",
                      "sp-cost": "130",
                      "range": "1 cells",
                      "data-1": "30000",
                      "data-2": "5",
                      "data-3": "25"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Success Chance 21% / Increasing Caster's skill level of Lesson additionally",
                      "sp-cost": "140",
                      "range": "1 cells",
                      "data-1": "40000",
                      "data-2": "6",
                      "data-3": "30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Success Chance 24% / Increasing Caster's skill level of Lesson additionally",
                      "sp-cost": "150",
                      "range": "1 cells",
                      "data-1": "50000",
                      "data-2": "6",
                      "data-3": "35"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Success Chance 27% / Increasing Caster's skill level of Lesson additionally",
                      "sp-cost": "160",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-2": "7",
                      "data-3": "40"
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
        },
        {
          "id": 2429,
          "imageFile": "2429.png",
          "name": "Song of Destruction",
          "maxLevel": 5,
          "prerequisiteText": "Saturday Night Fever 3,",
          "group": "Active / Special / Chorus",
          "type": "",
          "target": "Enemy player in range",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Song_of_Destruction",
          "description": "It doubles all damage for 10 seconds to surrounding enemy players, centering on the caster.\nThe effect does not disappear when damaged\nIncreasing duration time as caster's skill level of Lesson additionally.\nConsume 10 [Throat Lozenge].\nOnly usable in PVP/WoE\nRequires an instrument/whip to cast.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Effective range 11x11"
            },
            {
              "level": 2,
              "text": "Effective range 11x11"
            },
            {
              "level": 3,
              "text": "Effective range 13x13"
            },
            {
              "level": 4,
              "text": "Effective range 13x13"
            },
            {
              "level": 5,
              "text": "Effective range 15x15"
            }
          ],
          "fixedCastTime": "2 seconds",
          "variableCastTime": "3 seconds",
          "castDelay": "0.3 seconds",
          "cooldown": "60 seconds",
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
          "spCost": "?",
          "castRange": "10 cells",
          "areaOfEffect": "9 x 9 ~ 15 x 15",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2429.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2429",
          "tree": {
            "idx": 45,
            "row": 6,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2430,
                "level": 3,
                "name": "Saturday Night Fever",
                "visible": true
              },
              {
                "id": 2432,
                "level": 3,
                "name": "Sinking Melody",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Special / Chorus Skill"
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
                "value": "2 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "3 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "60 seconds"
              },
              {
                "label": "Cast Range",
                "value": "10 cells"
              },
              {
                "label": "Target",
                "value": "Enemy player in range"
              },
              {
                "label": "Area of Effect",
                "value": "9 x 9 ~ 15 x 15"
              }
            ],
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
                      "effect": "Effective range 11 x 11",
                      "sp-cost": "80",
                      "range": "9 cells",
                      "atk": "500",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Effective range 11 x 11",
                      "sp-cost": "90",
                      "range": "9 cells",
                      "atk": "500",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Effective range 13 x 13",
                      "sp-cost": "100",
                      "range": "9 cells",
                      "atk": "500",
                      "data-1": "5"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Effective range 13 x 13",
                      "sp-cost": "110",
                      "range": "9 cells",
                      "atk": "500",
                      "data-1": "6"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Effective range 15 x 15",
                      "sp-cost": "120",
                      "range": "9 cells",
                      "atk": "500",
                      "data-1": "7"
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
          "id": 2434,
          "imageFile": "2434.png",
          "name": "Infinite Humming",
          "maxLevel": 5,
          "prerequisiteText": "Song of Destruction 1 , Warcry from Beyond 1",
          "group": "Active / Buff / Chorus",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Infinite_Humming",
          "description": "Requires an instrument/whip to cast. Increases all property magical damage of party members around caster including yourself. Increases skill effect as caster's skill level of Lesson additionally. Consume 5 [Throat Lozenge]",
          "levelDetails": [
            {
              "level": 1,
              "text": "Range 11 x 11 / All property magical damage +4%, Increasing Caster's skill level of Lesson additionally."
            },
            {
              "level": 2,
              "text": "Range 11 x 11 / All property magical damage +8%, Increasing Caster's skill level of Lesson additionally."
            },
            {
              "level": 3,
              "text": "Range 13 x 13 / All property magical damage +12%, Increasing Caster's skill level of Lesson additionally."
            },
            {
              "level": 4,
              "text": "Range 13 x 13 / All property magical damage +16%, Increasing Caster's skill level of Lesson additionally."
            },
            {
              "level": 5,
              "text": "Range 15 x 15 / All property magical damage +20%, Increasing Caster's skill level of Lesson additionally."
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.3 seconds",
          "cooldown": "180 seconds",
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
                },
                {
                  "level": 5,
                  "value": "160"
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
                  "value": "5"
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
                  "value": "6"
                },
                {
                  "level": 5,
                  "value": "7"
                }
              ]
            }
          ],
          "spCost": "?",
          "duration": "[30 + (Skill Level × 30)] seconds",
          "areaOfEffect": "11 x 11 ~ 15 x 15",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2434.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2434",
          "tree": {
            "idx": 46,
            "row": 6,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2429,
                "level": 1,
                "name": "Song of Destruction",
                "visible": true
              },
              {
                "id": 2433,
                "level": 1,
                "name": "Warcry from Beyond",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Buff / Chorus Skill"
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
                "value": "180 seconds"
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
                "value": "[30 + (Skill Level × 30)] seconds"
              }
            ],
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
                  },
                  {
                    "id": "range-11-x-11-all-property-magical-damage",
                    "label": "Range 11 X 11 / All Property Magical Damage"
                  },
                  {
                    "id": "range-13-x-13-all-property-magical-damage",
                    "label": "Range 13 X 13 / All Property Magical Damage"
                  },
                  {
                    "id": "range-15-x-15-all-property-magical-damage",
                    "label": "Range 15 X 15 / All Property Magical Damage"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "range-11-x-11-all-property-magical-damage": "+4%",
                      "effect": "Increasing Caster's skill level of Lesson additionally",
                      "sp-cost": "120",
                      "range": "1 cells",
                      "data-1": "60000",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "range-11-x-11-all-property-magical-damage": "+8%",
                      "effect": "Increasing Caster's skill level of Lesson additionally",
                      "sp-cost": "130",
                      "range": "1 cells",
                      "data-1": "90000",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "range-13-x-13-all-property-magical-damage": "+12%",
                      "effect": "Increasing Caster's skill level of Lesson additionally",
                      "sp-cost": "140",
                      "range": "1 cells",
                      "data-1": "120000",
                      "data-2": "6"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "range-13-x-13-all-property-magical-damage": "+16%",
                      "effect": "Increasing Caster's skill level of Lesson additionally",
                      "sp-cost": "150",
                      "range": "1 cells",
                      "data-1": "150000",
                      "data-2": "6"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "range-15-x-15-all-property-magical-damage": "+20%",
                      "effect": "Increasing Caster's skill level of Lesson additionally",
                      "sp-cost": "160",
                      "range": "1 cells",
                      "data-1": "180000",
                      "data-2": "7"
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
      "label": "Clown",
      "pointLimit": 69,
      "tree": {
        "columns": 7,
        "rows": 6
      },
      "skills": [
        {
          "id": 304,
          "imageFile": "304.png",
          "name": "Amp",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Amp",
          "description": "It is a skill to cope with various unexpected situations occurring during a performance.\nReduces SP consumption used for performances, ensembles and dances for a certain period of time by 20%.\nCan be used in duplicate with Encore.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.3 seconds",
          "cooldown": "300 seconds",
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
                  "value": "180000"
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
          "spCost": "10",
          "duration": "180 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/304.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/304",
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
                "value": "0.3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "300 seconds"
              },
              {
                "label": "Target",
                "value": "Caster Only"
              },
              {
                "label": "Duration",
                "value": "180 seconds"
              }
            ],
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
                      "sp-cost": "10",
                      "data-1": "180000",
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
          "id": 315,
          "imageFile": "315.png",
          "name": "Musical Lesson",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Musical_Lesson",
          "description": "Enhances attack (Weapon Mastery) with Instrument class weapons and enables movement while playing songs.\nMaxSP always increases and ATK, Cirital Rate increases only with intruments.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK Bonus +3, Reduction of delay after atk 1%, MaxSP + 1%"
            },
            {
              "level": 2,
              "text": "ATK Bonus +6, Reduction of delay after atk 2% MaxSP + 2%"
            },
            {
              "level": 3,
              "text": "ATK Bonus +9, Reduction of delay after atk 3%, MaxSP + 3%"
            },
            {
              "level": 4,
              "text": "ATK Bonus +12, Reduction of delay after atk 4%, MaxSP + 4%"
            },
            {
              "level": 5,
              "text": "ATK Bonus +15, Reduction of delay after atk 5%, MaxSP + 5%"
            },
            {
              "level": 6,
              "text": "ATK Bonus +18, Reduction of delay after atk 6%, MaxSP + 6%"
            },
            {
              "level": 7,
              "text": "ATK Bonus +21, Reduction of delay after atk 7%, MaxSP + 7%"
            },
            {
              "level": 8,
              "text": "ATK Bonus +24, Reduction of delay after atk 8%, MaxSP + 8%"
            },
            {
              "level": 9,
              "text": "ATK Bonus +27, Reduction of delay after atk 9%, MaxSP + 9%"
            },
            {
              "level": 10,
              "text": "ATK Bonus +30, Reduction of delay after atk 10%, MaxSP + 10%"
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/315.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/315",
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
                    "id": "atk-bonus",
                    "label": "Atk Bonus"
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
                    "id": "reduction-of-delay-after-atk-1-maxsp",
                    "label": "Reduction Of Delay After Atk 1%, MaxSP"
                  },
                  {
                    "id": "reduction-of-delay-after-atk-10-maxsp",
                    "label": "Reduction Of Delay After Atk 10%, MaxSP"
                  },
                  {
                    "id": "reduction-of-delay-after-atk-2-maxsp",
                    "label": "Reduction Of Delay After Atk 2% MaxSP"
                  },
                  {
                    "id": "reduction-of-delay-after-atk-3-maxsp",
                    "label": "Reduction Of Delay After Atk 3%, MaxSP"
                  },
                  {
                    "id": "reduction-of-delay-after-atk-4-maxsp",
                    "label": "Reduction Of Delay After Atk 4%, MaxSP"
                  },
                  {
                    "id": "reduction-of-delay-after-atk-5-maxsp",
                    "label": "Reduction Of Delay After Atk 5%, MaxSP"
                  },
                  {
                    "id": "reduction-of-delay-after-atk-6-maxsp",
                    "label": "Reduction Of Delay After Atk 6%, MaxSP"
                  },
                  {
                    "id": "reduction-of-delay-after-atk-7-maxsp",
                    "label": "Reduction Of Delay After Atk 7%, MaxSP"
                  },
                  {
                    "id": "reduction-of-delay-after-atk-8-maxsp",
                    "label": "Reduction Of Delay After Atk 8%, MaxSP"
                  },
                  {
                    "id": "reduction-of-delay-after-atk-9-maxsp",
                    "label": "Reduction Of Delay After Atk 9%, MaxSP"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "atk-bonus": "+3",
                      "reduction-of-delay-after-atk-1-maxsp": "+ 1%",
                      "sp-cost": "0",
                      "data-1": "3",
                      "data-2": "1",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "atk-bonus": "+6",
                      "reduction-of-delay-after-atk-2-maxsp": "+ 2%",
                      "sp-cost": "0",
                      "data-1": "6",
                      "data-2": "2",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "atk-bonus": "+9",
                      "reduction-of-delay-after-atk-3-maxsp": "+ 3%",
                      "sp-cost": "0",
                      "data-1": "9",
                      "data-2": "3",
                      "data-3": "3"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "atk-bonus": "+12",
                      "reduction-of-delay-after-atk-4-maxsp": "+ 4%",
                      "sp-cost": "0",
                      "data-1": "12",
                      "data-2": "4",
                      "data-3": "4"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "atk-bonus": "+15",
                      "reduction-of-delay-after-atk-5-maxsp": "+ 5%",
                      "sp-cost": "0",
                      "data-1": "15",
                      "data-2": "5",
                      "data-3": "5"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "atk-bonus": "+18",
                      "reduction-of-delay-after-atk-6-maxsp": "+ 6%",
                      "sp-cost": "0",
                      "data-1": "18",
                      "data-2": "6",
                      "data-3": "6"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "atk-bonus": "+21",
                      "reduction-of-delay-after-atk-7-maxsp": "+ 7%",
                      "sp-cost": "0",
                      "data-1": "21",
                      "data-2": "7",
                      "data-3": "7"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "atk-bonus": "+24",
                      "reduction-of-delay-after-atk-8-maxsp": "+ 8%",
                      "sp-cost": "0",
                      "data-1": "24",
                      "data-2": "8",
                      "data-3": "8"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "atk-bonus": "+27",
                      "reduction-of-delay-after-atk-9-maxsp": "+ 9%",
                      "sp-cost": "0",
                      "data-1": "27",
                      "data-2": "9",
                      "data-3": "9"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "atk-bonus": "+30",
                      "reduction-of-delay-after-atk-10-maxsp": "+ 10%",
                      "sp-cost": "0",
                      "data-1": "30",
                      "data-2": "10",
                      "data-3": "10"
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
          "id": 317,
          "imageFile": "317.png",
          "name": "Unchained Serenade (Dissonance)",
          "maxLevel": 5,
          "prerequisiteText": "Amp 1, Music Lessons 1",
          "group": "Active",
          "type": "Instrument",
          "target": "9*9 cells around the user",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Performs a song that will inflict piercing damage to all enemies around the performer.\nDamage increases as the caster's job level increases.\nIt does not overlap with other playing skills and can only be used when the instrument is mounted.\nThis skill can only be used in PVP / Sieze Mode.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 110%"
            },
            {
              "level": 2,
              "text": "MATK 120%"
            },
            {
              "level": 3,
              "text": "MATK 130%"
            },
            {
              "level": 4,
              "text": "MATK 140%"
            },
            {
              "level": 5,
              "text": "MATK 150%"
            }
          ],
          "fixedCastTime": "0.3 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.3 seconds",
          "cooldown": "5 seconds",
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
                  "value": "190"
                },
                {
                  "level": 3,
                  "value": "230"
                },
                {
                  "level": 4,
                  "value": "270"
                },
                {
                  "level": 5,
                  "value": "310"
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
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/317.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/317",
          "tree": {
            "idx": 3,
            "row": 0,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 304,
                "level": 1,
                "name": "Amp",
                "visible": true
              },
              {
                "id": 315,
                "level": 1,
                "name": "Music Lessons",
                "visible": true
              }
            ]
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
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "0.3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "5 seconds"
              },
              {
                "label": "Target",
                "value": "9*9 cells around the user"
              }
            ],
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
                      "sp-cost": "35",
                      "atk": "150",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "38",
                      "atk": "190",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "41",
                      "atk": "230",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "44",
                      "atk": "270",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "47",
                      "atk": "310",
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
          "id": 1010,
          "imageFile": "1010.png",
          "name": "Pang Voice",
          "maxLevel": 1,
          "prerequisiteText": "Quest complete",
          "group": "Active",
          "type": "Debuff",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Pang_Voice",
          "description": "Shouts a horrible shriek to the target at the cost of 40 SP. Creates a high chance of Confusing and Bleeding them.\nNot applicable to Boss monsters.",
          "levelDetails": [],
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "0.8 seconds",
          "castDelay": "2 seconds",
          "cooldown": "10 seconds",
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
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "9 cells"
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
                  "value": "10000"
                }
              ]
            }
          ],
          "spCost": "20",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/1010.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/1010",
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
                "value": "2 seconds"
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
                      "range": "9 cells",
                      "data-1": "1000",
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
          "id": 305,
          "imageFile": "305.png",
          "name": "Encore",
          "maxLevel": 1,
          "prerequisiteText": "Amp 1",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Encore",
          "description": "Replays the last song/dance performed at half of its SP Cost.\nYou can use the performance, dance, and ensemble skills with 1/2 of the usual SP consumption.\nWhen the last dance, ensemble, or performance is not available, only skill is used and delay time is occured.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.3 seconds",
          "cooldown": "10 seconds",
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
          "spCost": "1",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/305.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/305",
          "tree": {
            "idx": 7,
            "row": 1,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 304,
                "level": 1,
                "name": "Amp",
                "visible": true
              }
            ]
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
                "value": "0.3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "10 seconds"
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 316,
          "imageFile": "316.png",
          "name": "Melody Strike (Musical Strike)",
          "maxLevel": 5,
          "prerequisiteText": "Music Lessons 3",
          "group": "Active",
          "type": "Ranged Physical Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "can only be used when the instrument is mounted.\nSlings a bolt at a single target using the equipped Instrument.\nEach cast uses one arrow, the property of which depends the property of this skill.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 150% X 2"
            },
            {
              "level": 2,
              "text": "ATK 190% X 2"
            },
            {
              "level": 3,
              "text": "ATK 230% X 2"
            },
            {
              "level": 4,
              "text": "ATK 270% X 2"
            },
            {
              "level": 5,
              "text": "ATK 310% X 2"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0.5 seconds",
          "castDelay": "0.3 seconds",
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
                  "value": "150"
                },
                {
                  "level": 2,
                  "value": "190"
                },
                {
                  "level": 3,
                  "value": "230"
                },
                {
                  "level": 4,
                  "value": "270"
                },
                {
                  "level": 5,
                  "value": "310"
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
          "iconUrl": "assets/divine-pride/skills/316.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/316",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 315,
                "level": 3,
                "name": "Music Lessons",
                "visible": true
              }
            ]
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
                "value": "0.5 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.3 seconds"
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
                      "sp-cost": "12",
                      "range": "9 cells",
                      "atk": "150",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "12",
                      "range": "9 cells",
                      "atk": "190",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "12",
                      "range": "9 cells",
                      "atk": "230",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "12",
                      "range": "9 cells",
                      "atk": "270",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "12",
                      "range": "9 cells",
                      "atk": "310",
                      "data-1": "1"
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
          "id": 319,
          "imageFile": "319.png",
          "name": "Perfect Tablature",
          "maxLevel": 10,
          "prerequisiteText": "Dissonance 3",
          "group": "Active",
          "type": "Instrumental Skill",
          "target": "Self and Party members around 31 X 31 cell",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Perfect_Tablature",
          "description": "On-screen (31x31), increases party members' FLEE and perfect dodge.\nIt does not overlap with other Instrumental Skill and can only be used when the caster is equipping instruments.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Flee + 20, Perfect Dodge +1"
            },
            {
              "level": 2,
              "text": "Flee + 22, Perfect Dodge +1"
            },
            {
              "level": 3,
              "text": "Flee + 24, Perfect Dodge +2"
            },
            {
              "level": 4,
              "text": "Flee + 26, Perfect Dodge +2"
            },
            {
              "level": 5,
              "text": "Flee + 28, Perfect Dodge +3"
            },
            {
              "level": 6,
              "text": "Flee + 30, Perfect Dodge +3"
            },
            {
              "level": 7,
              "text": "Flee + 32, Perfect Dodge +4"
            },
            {
              "level": 8,
              "text": "Flee + 34, Perfect Dodge +4"
            },
            {
              "level": 9,
              "text": "Flee + 36, Perfect Dodge +5"
            },
            {
              "level": 10,
              "text": "Flee + 40, Perfect Dodge +5"
            }
          ],
          "fixedCastTime": "0.3 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.3 seconds",
          "cooldown": "20 seconds",
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
                },
                {
                  "level": 6,
                  "value": "60000"
                },
                {
                  "level": 7,
                  "value": "60000"
                },
                {
                  "level": 8,
                  "value": "60000"
                },
                {
                  "level": 9,
                  "value": "60000"
                },
                {
                  "level": 10,
                  "value": "60000"
                }
              ]
            },
            {
              "label": "Data 2",
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
                  "value": "40"
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
                  "value": "20"
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
                  "value": "30"
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
                  "value": "50"
                },
                {
                  "level": 10,
                  "value": "50"
                }
              ]
            }
          ],
          "spCost": "20 + (Skill Level × 2)",
          "duration": "180 seconds",
          "areaOfEffect": "31 x 31",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/319.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/319",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 317,
                "level": 3,
                "name": "Unchained Serenade",
                "visible": true
              }
            ]
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
                "value": "20 + (Skill Level × 2)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.3 seconds"
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
                "value": "20 seconds"
              },
              {
                "label": "Target",
                "value": "Self and Party members around 31 X 31 cell"
              },
              {
                "label": "Area of Effect",
                "value": "31 x 31"
              },
              {
                "label": "Duration",
                "value": "180 seconds"
              }
            ],
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
                    "id": "flee",
                    "label": "Flee"
                  },
                  {
                    "id": "perfect-dodge",
                    "label": "Perfect Dodge"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "flee": "+ 20",
                      "perfect-dodge": "+1",
                      "sp-cost": "22",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "20",
                      "data-4": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "flee": "+ 22",
                      "perfect-dodge": "+1",
                      "sp-cost": "24",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "22",
                      "data-4": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "flee": "+ 24",
                      "perfect-dodge": "+2",
                      "sp-cost": "26",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "24",
                      "data-4": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "flee": "+ 26",
                      "perfect-dodge": "+2",
                      "sp-cost": "28",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "26",
                      "data-4": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "flee": "+ 28",
                      "perfect-dodge": "+3",
                      "sp-cost": "30",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "28",
                      "data-4": "30"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "flee": "+ 30",
                      "perfect-dodge": "+3",
                      "sp-cost": "32",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "30",
                      "data-4": "30"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "flee": "+ 32",
                      "perfect-dodge": "+4",
                      "sp-cost": "34",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "32",
                      "data-4": "40"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "flee": "+ 34",
                      "perfect-dodge": "+4",
                      "sp-cost": "36",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "34",
                      "data-4": "40"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "flee": "+ 36",
                      "perfect-dodge": "+5",
                      "sp-cost": "38",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "36",
                      "data-4": "50"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "flee": "+ 40",
                      "perfect-dodge": "+5",
                      "sp-cost": "40",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "40",
                      "data-4": "50"
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
          "id": 320,
          "imageFile": "320.png",
          "name": "Impressive Riff",
          "maxLevel": 10,
          "prerequisiteText": "Dissonance 3",
          "group": "Active",
          "type": "Instrumental Skill",
          "target": "Self and Party members around 31 X 31 cell",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Impressive_Riff",
          "description": "On-screen (31x31), increases party members' ASPD.\nIt does not overlap with other Instrumental Skill and can only be used when the caster is equipping instruments.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Increases ASPD(Reduce delay after attack by 1%)"
            },
            {
              "level": 2,
              "text": "Increases ASPD(Reduce delay after attack by 3%)"
            },
            {
              "level": 3,
              "text": "Increases ASPD(Reduce delay after attack by 5%)"
            },
            {
              "level": 4,
              "text": "Increases ASPD(Reduce delay after attack by 7%)"
            },
            {
              "level": 5,
              "text": "Increases ASPD(Reduce delay after attack by 9%)"
            },
            {
              "level": 6,
              "text": "Increases ASPD(Reduce delay after attack by 11%)"
            },
            {
              "level": 7,
              "text": "Increases ASPD(Reduce delay after attack by 13%)"
            },
            {
              "level": 8,
              "text": "Increases ASPD(Reduce delay after attack by 15%)"
            },
            {
              "level": 9,
              "text": "Increases ASPD(Reduce delay after attack by 17%)"
            },
            {
              "level": 10,
              "text": "Increases ASPD(Reduce delay after attack by 20%)"
            }
          ],
          "fixedCastTime": "0.3 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.3 seconds",
          "cooldown": "20 seconds",
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
                },
                {
                  "level": 6,
                  "value": "60000"
                },
                {
                  "level": 7,
                  "value": "60000"
                },
                {
                  "level": 8,
                  "value": "60000"
                },
                {
                  "level": 9,
                  "value": "60000"
                },
                {
                  "level": 10,
                  "value": "60000"
                }
              ]
            },
            {
              "label": "Data 2",
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
                  "value": "3"
                },
                {
                  "level": 3,
                  "value": "5"
                },
                {
                  "level": 4,
                  "value": "7"
                },
                {
                  "level": 5,
                  "value": "9"
                },
                {
                  "level": 6,
                  "value": "11"
                },
                {
                  "level": 7,
                  "value": "13"
                },
                {
                  "level": 8,
                  "value": "15"
                },
                {
                  "level": 9,
                  "value": "17"
                },
                {
                  "level": 10,
                  "value": "20"
                }
              ]
            }
          ],
          "spCost": "35 + (Skill Level × 5)",
          "duration": "180 seconds",
          "areaOfEffect": "31 x 31",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/320.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/320",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 317,
                "level": 3,
                "name": "Unchained Serenade",
                "visible": true
              }
            ]
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
                "value": "35 + (Skill Level × 5)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.3 seconds"
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
                "value": "20 seconds"
              },
              {
                "label": "Target",
                "value": "Self and Party members around 31 X 31 cell"
              },
              {
                "label": "Area of Effect",
                "value": "31 x 31"
              },
              {
                "label": "Duration",
                "value": "180 seconds"
              }
            ],
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
                      "effect": "Increases ASPD(Reduce delay after attack by 1%)",
                      "sp-cost": "40",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Increases ASPD(Reduce delay after attack by 3%)",
                      "sp-cost": "45",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "3"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Increases ASPD(Reduce delay after attack by 5%)",
                      "sp-cost": "50",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "5"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Increases ASPD(Reduce delay after attack by 7%)",
                      "sp-cost": "55",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "7"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Increases ASPD(Reduce delay after attack by 9%)",
                      "sp-cost": "60",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "9"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Increases ASPD(Reduce delay after attack by 11%)",
                      "sp-cost": "65",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "11"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Increases ASPD(Reduce delay after attack by 13%)",
                      "sp-cost": "70",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "13"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Increases ASPD(Reduce delay after attack by 15%)",
                      "sp-cost": "75",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "15"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Increases ASPD(Reduce delay after attack by 17%)",
                      "sp-cost": "80",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "17"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Increases ASPD(Reduce delay after attack by 20%)",
                      "sp-cost": "85",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "20"
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
          "id": 321,
          "imageFile": "321.png",
          "name": "Magic Strings",
          "maxLevel": 10,
          "prerequisiteText": "Dissonance 3",
          "group": "Active",
          "type": "Instrumental Skill",
          "target": "Self and Party members around 31 X 31 cell",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Magic_Strings",
          "description": "On-screen (31x31), reduces party members' variable casting time and global skill cooltime.\nIt does not overlap with other Instrumental Skill and can only be used when the caster is equipping instruments.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Variable Casting- 2%, Global Cooltime- 3%"
            },
            {
              "level": 2,
              "text": "Variable Casting- 4%, Global Cooltime- 6%"
            },
            {
              "level": 3,
              "text": "Variable Casting- 6%, Global Cooltime- 9%"
            },
            {
              "level": 4,
              "text": "Variable Casting- 8%, Global Cooltime-12%"
            },
            {
              "level": 5,
              "text": "Variable Casting-10%, Global Cooltime-15%"
            },
            {
              "level": 6,
              "text": "Variable Casting-12%, Global Cooltime-18%"
            },
            {
              "level": 7,
              "text": "Variable Casting-14%, Global Cooltime-21%"
            },
            {
              "level": 8,
              "text": "Variable Casting-16%, Global Cooltime-24%"
            },
            {
              "level": 9,
              "text": "Variable Casting-18%, Global Cooltime-27%"
            },
            {
              "level": 10,
              "text": "Variable Casting-20%, Global Cooltime-30%"
            }
          ],
          "fixedCastTime": "0.3 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.3 seconds",
          "cooldown": "20 seconds",
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
                  "value": "70"
                },
                {
                  "level": 3,
                  "value": "75"
                },
                {
                  "level": 4,
                  "value": "80"
                },
                {
                  "level": 5,
                  "value": "85"
                },
                {
                  "level": 6,
                  "value": "90"
                },
                {
                  "level": 7,
                  "value": "95"
                },
                {
                  "level": 8,
                  "value": "100"
                },
                {
                  "level": 9,
                  "value": "105"
                },
                {
                  "level": 10,
                  "value": "110"
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
                },
                {
                  "level": 6,
                  "value": "60000"
                },
                {
                  "level": 7,
                  "value": "60000"
                },
                {
                  "level": 8,
                  "value": "60000"
                },
                {
                  "level": 9,
                  "value": "60000"
                },
                {
                  "level": 10,
                  "value": "60000"
                }
              ]
            },
            {
              "label": "Data 2",
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
              "label": "Data 4",
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
            }
          ],
          "spCost": "60 + (Skill Level × 5)",
          "duration": "180 seconds",
          "areaOfEffect": "31 x 31",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/321.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/321",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 317,
                "level": 3,
                "name": "Unchained Serenade",
                "visible": true
              }
            ]
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
                "value": "60 + (Skill Level × 5)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.3 seconds"
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
                "value": "20 seconds"
              },
              {
                "label": "Target",
                "value": "Self and Party members around 31 X 31 cell"
              },
              {
                "label": "Area of Effect",
                "value": "31 x 31"
              },
              {
                "label": "Duration",
                "value": "180 seconds"
              }
            ],
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
                    "id": "global-cooltime",
                    "label": "Global Cooltime"
                  },
                  {
                    "id": "variable-casting",
                    "label": "Variable Casting"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "variable-casting": "- 2%",
                      "global-cooltime": "- 3%",
                      "sp-cost": "65",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "2",
                      "data-4": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "variable-casting": "- 4%",
                      "global-cooltime": "- 6%",
                      "sp-cost": "70",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "4",
                      "data-4": "6"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "variable-casting": "- 6%",
                      "global-cooltime": "- 9%",
                      "sp-cost": "75",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "6",
                      "data-4": "9"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "variable-casting": "- 8%",
                      "global-cooltime": "-12%",
                      "sp-cost": "80",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "8",
                      "data-4": "12"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "variable-casting": "-10%",
                      "global-cooltime": "-15%",
                      "sp-cost": "85",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "10",
                      "data-4": "15"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "variable-casting": "-12%",
                      "global-cooltime": "-18%",
                      "sp-cost": "90",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "12",
                      "data-4": "18"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "variable-casting": "-14%",
                      "global-cooltime": "-21%",
                      "sp-cost": "95",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "14",
                      "data-4": "21"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "variable-casting": "-16%",
                      "global-cooltime": "-24%",
                      "sp-cost": "100",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "16",
                      "data-4": "24"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "variable-casting": "-18%",
                      "global-cooltime": "-27%",
                      "sp-cost": "105",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "18",
                      "data-4": "27"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "variable-casting": "-20%",
                      "global-cooltime": "-30%",
                      "sp-cost": "110",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "20",
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
          "id": 322,
          "imageFile": "322.png",
          "name": "Song of Lutie",
          "maxLevel": 10,
          "prerequisiteText": "Dissonance 3",
          "group": "Active",
          "type": "Instrumental Skill",
          "target": "Self and Party members around 31 X 31 cell",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Song_of_Lutie",
          "description": "On-screen (31x31), increases party members' Maximum HP and healings received.\nIt does not overlap with other Instrumental Skill and can only be used when the caster is equipping instruments.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MaxHP +10%, Healings Received + 2%"
            },
            {
              "level": 2,
              "text": "MaxHP +11%, Healings Received + 4%"
            },
            {
              "level": 3,
              "text": "MaxHP +12%, Healings Received + 6%"
            },
            {
              "level": 4,
              "text": "MaxHP +13%, Healings Received + 8%"
            },
            {
              "level": 5,
              "text": "MaxHP +14%, Healings Received +10%"
            },
            {
              "level": 6,
              "text": "MaxHP +15%, Healings Received +12%"
            },
            {
              "level": 7,
              "text": "MaxHP +16%, Healings Received +14%"
            },
            {
              "level": 8,
              "text": "MaxHP +17%, Healings Received +16%"
            },
            {
              "level": 9,
              "text": "MaxHP +18%, Healings Received +18%"
            },
            {
              "level": 10,
              "text": "MaxHP +20%, Healings Received +20%"
            }
          ],
          "fixedCastTime": "0.3 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.3 seconds",
          "cooldown": "20 seconds",
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
                },
                {
                  "level": 6,
                  "value": "60000"
                },
                {
                  "level": 7,
                  "value": "60000"
                },
                {
                  "level": 8,
                  "value": "60000"
                },
                {
                  "level": 9,
                  "value": "60000"
                },
                {
                  "level": 10,
                  "value": "60000"
                }
              ]
            },
            {
              "label": "Data 2",
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
                },
                {
                  "level": 6,
                  "value": "15"
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
                  "value": "18"
                },
                {
                  "level": 10,
                  "value": "20"
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
          "spCost": "35 + (Skill Level × 5)",
          "duration": "180 seconds",
          "areaOfEffect": "31 x 31",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/322.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/322",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 317,
                "level": 3,
                "name": "Unchained Serenade",
                "visible": true
              }
            ]
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
                "value": "35 + (Skill Level × 5)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.3 seconds"
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
                "value": "20 seconds"
              },
              {
                "label": "Target",
                "value": "Self and Party members around 31 X 31 cell"
              },
              {
                "label": "Area of Effect",
                "value": "31 x 31"
              },
              {
                "label": "Duration",
                "value": "180 seconds"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "maxhp",
                    "label": "MaxHP"
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
                    "id": "data-4",
                    "label": "Data 4"
                  },
                  {
                    "id": "healings-received",
                    "label": "Healings Received"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "maxhp": "+10%",
                      "healings-received": "+ 2%",
                      "sp-cost": "40",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "10",
                      "data-4": "2"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "maxhp": "+11%",
                      "healings-received": "+ 4%",
                      "sp-cost": "45",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "11",
                      "data-4": "4"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "maxhp": "+12%",
                      "healings-received": "+ 6%",
                      "sp-cost": "50",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "12",
                      "data-4": "6"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "maxhp": "+13%",
                      "healings-received": "+ 8%",
                      "sp-cost": "55",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "13",
                      "data-4": "8"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "maxhp": "+14%",
                      "healings-received": "+10%",
                      "sp-cost": "60",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "14",
                      "data-4": "10"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "maxhp": "+15%",
                      "healings-received": "+12%",
                      "sp-cost": "65",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "15",
                      "data-4": "12"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "maxhp": "+16%",
                      "healings-received": "+14%",
                      "sp-cost": "70",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "16",
                      "data-4": "14"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "maxhp": "+17%",
                      "healings-received": "+16%",
                      "sp-cost": "75",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "17",
                      "data-4": "16"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "maxhp": "+18%",
                      "healings-received": "+18%",
                      "sp-cost": "80",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "18",
                      "data-4": "18"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "maxhp": "+20%",
                      "healings-received": "+20%",
                      "sp-cost": "85",
                      "data-1": "60000",
                      "data-2": "15",
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
          "id": 318,
          "imageFile": "318.png",
          "name": "Unbarring Octave",
          "maxLevel": 5,
          "prerequisiteText": "Encore 1",
          "group": "Active",
          "type": "Debuff",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Unbarring_Octave",
          "description": "Tells a lame joke loudly, which has a chance of leaving enemies frozen due to how boring it was.\nSkill level affects chance of effect.\nBard's party members have a low probability of being frozen, and in PVP they have a chance of leaving all players frozen.\nThe chance of frozen is reduced by the target's resistance to abnormal status.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Chance of freezing: 20%"
            },
            {
              "level": 2,
              "text": "Chance of freezing: 25%"
            },
            {
              "level": 3,
              "text": "Chance of freezing: 30%"
            },
            {
              "level": 4,
              "text": "Chance of freezing: 35%"
            },
            {
              "level": 5,
              "text": "Chance of freezing: 40%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.3 seconds",
          "cooldown": "5 seconds",
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
          "spCost": "(Skill level × 2) + 10",
          "areaOfEffect": "Screen",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/318.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/318",
          "tree": {
            "idx": 14,
            "row": 2,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 305,
                "level": 1,
                "name": "Encore",
                "visible": true
              }
            ]
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
                "value": "(Skill level × 2) + 10"
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
                "value": "0.3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "5 seconds"
              },
              {
                "label": "Target",
                "value": "Caster Only"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Chance of freezing: 20%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Chance of freezing: 25%",
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Chance of freezing: 30%",
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Chance of freezing: 35%",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Chance of freezing: 40%",
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
          "id": 306,
          "imageFile": "306.png",
          "name": "Lullaby",
          "maxLevel": 1,
          "prerequisiteText": "Perfect Tablature(Focus Ballet) 10",
          "group": "Active",
          "type": "ensemble skill",
          "target": "9*9 cells around the user",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Lullaby",
          "description": "Performs a dreamy ensemble that may leave all enemies sleeping.\nThe chance of sleep and duration is reduced by the target's resistance to abnormal status.\nThis skill can be overlapped with other ensemble skills, and can only be used when the caster is equipped with an instrument or whip.\nEnsemble skill is activated when the bard / dancer in the party is within 9 x 9 cells\nEnters a ensemble aftermath(unavailable skill, reduced movement speed and attack speed) for 10 seconds.\nCannot be used on players and Boss monsters.",
          "levelDetails": [],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.3 seconds",
          "cooldown": "20 seconds",
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
                  "value": "60000"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "4"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "1000"
                }
              ]
            }
          ],
          "spCost": "40",
          "duration": "60 seconds",
          "areaOfEffect": "9 x 9",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/306.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/306",
          "tree": {
            "idx": 16,
            "row": 2,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 319,
                "level": 10,
                "name": "Perfect Tablature",
                "visible": true
              }
            ]
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
                "value": "40"
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
                "value": "20 seconds"
              },
              {
                "label": "Target",
                "value": "9*9 cells around the user"
              },
              {
                "label": "Area of Effect",
                "value": "9 x 9"
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
                      "sp-cost": "40",
                      "data-1": "60000",
                      "data-2": "4",
                      "data-3": "1000"
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
          "id": 311,
          "imageFile": "311.png",
          "name": "Classical Pluck",
          "maxLevel": 1,
          "prerequisiteText": "Impressive Riff(Slow Grace) 10",
          "group": "Active",
          "type": "ensemble skill",
          "target": "9*9 cells around the user",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Classical_Pluck",
          "description": "For 60 seconds, all targets except the caster within the range of 9 X 9 cells will not be able to use skills and magic..\nThis skill cannot be overlapped with other ensemble skills, and can only be used when the caster is equipped with an instrument or whip.\nEnsemble skill is activated when the bard / dancer in the party is within 9 x 9 cells\nEnters a ensemble aftermath(unavailable skill, reduced movement speed and attack speed) for 10 seconds.\nThis skill can only be used in PVP / Sieze Mode.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "3 seconds",
          "castDelay": "0.3 seconds",
          "cooldown": "180 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "180"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "30000"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "4"
                }
              ]
            }
          ],
          "spCost": "15",
          "duration": "60 seconds",
          "areaOfEffect": "9 x 9",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/311.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/311",
          "tree": {
            "idx": 17,
            "row": 2,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 320,
                "level": 10,
                "name": "Impressive Riff",
                "visible": true
              }
            ]
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
                "label": "Fixed Cast Time",
                "value": "1 second"
              },
              {
                "label": "Variable Cast Time",
                "value": "3 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "180 seconds"
              },
              {
                "label": "Target",
                "value": "9*9 cells around the user"
              },
              {
                "label": "Area of Effect",
                "value": "9 x 9"
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
                      "sp-cost": "180",
                      "data-1": "30000",
                      "data-2": "4"
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
          "id": 313,
          "imageFile": "313.png",
          "name": "Acoustic Rhythm",
          "maxLevel": 5,
          "prerequisiteText": "Magic Strings(Lady Luck) 10",
          "group": "Active",
          "type": "Ensemble Skill",
          "target": "Self and Party members around 31 X 31 cell",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Acoustic_Rhythm",
          "description": "On-screen (31x31), increases resistance of party members' Earth/Water/Fire/Wind resistance based on its skill level.\nAl increases resistance to Petrification, Stone, Frozen, Stun, Curse, Sleep, Silence, Confusion.\nIt does not overlap with other Ensemble Skill and can only be used when the caster is equipping whips / instruments.\nEnsemble Skill only activates when Bard/ Dancer is within 9 X 9 cell. When Ensemble Skill is used, caster and partner becomes Aftereffect.\nCannot use skills, movement speed and ASP reduction for 10 sec.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Property Resistance + 3%, Status Effect Resistance + 5%"
            },
            {
              "level": 2,
              "text": "Property Resistance + 6%, Status Effect Resistance + 10%"
            },
            {
              "level": 3,
              "text": "Property Resistance + 9%, Status Effect Resistance + 15%"
            },
            {
              "level": 4,
              "text": "Property Resistance + 12%, Status Effect Resistance + 20%"
            },
            {
              "level": 5,
              "text": "Property Resistance + 15%, Status Effect Resistance + 25%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.3 seconds",
          "cooldown": "20 seconds",
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
              "label": "Data 3",
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
          "spCost": "20",
          "duration": "180 seconds",
          "areaOfEffect": "31 x 31",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/313.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/313",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 321,
                "level": 10,
                "name": "Magic Strings",
                "visible": true
              }
            ]
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
                "value": "20 seconds"
              },
              {
                "label": "Target",
                "value": "Self and Party members around 31 X 31 cell"
              },
              {
                "label": "Area of Effect",
                "value": "31 x 31"
              },
              {
                "label": "Duration",
                "value": "180 seconds"
              }
            ],
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
                    "id": "property-resistance",
                    "label": "Property Resistance"
                  },
                  {
                    "id": "status-effect-resistance",
                    "label": "Status Effect Resistance"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "property-resistance": "+ 3%",
                      "status-effect-resistance": "+ 5%",
                      "sp-cost": "40",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "3",
                      "data-4": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "property-resistance": "+ 6%",
                      "status-effect-resistance": "+ 10%",
                      "sp-cost": "44",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "6",
                      "data-4": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "property-resistance": "+ 9%",
                      "status-effect-resistance": "+ 15%",
                      "sp-cost": "48",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "9",
                      "data-4": "15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "property-resistance": "+ 12%",
                      "status-effect-resistance": "+ 20%",
                      "sp-cost": "52",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "12",
                      "data-4": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "property-resistance": "+ 15%",
                      "status-effect-resistance": "+ 25%",
                      "sp-cost": "56",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "15",
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 309,
          "imageFile": "309.png",
          "name": "Battle Theme",
          "maxLevel": 5,
          "prerequisiteText": "Song of Lutie(Gypsy's Kiss) 10",
          "group": "Active",
          "type": "Ensemble Skill",
          "target": "Self and Party members around 31 X 31 cell",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Battle_Theme",
          "description": "On-screen (31x31) Increases yourself and your party members ATK and DEF based on its skill level.\nIt does not overlap with other Ensemble Skill and can only be used when the caster is equipping whips / instruments.\nEnsemble Skill only activates when Bard/ Dancer is within 9 X 9 cell. When Ensemble Skill is used, caster and partner becomes Aftereffect.\nCannot use skills, movement speed and ASP reduction for 10 sec.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK + 20, DEF + 15."
            },
            {
              "level": 2,
              "text": "ATK + 25, DEF + 30."
            },
            {
              "level": 3,
              "text": "ATK + 30, DEF + 45."
            },
            {
              "level": 4,
              "text": "ATK + 35, DEF + 60."
            },
            {
              "level": 5,
              "text": "ATK + 40, DEF + 75."
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.3 seconds",
          "cooldown": "20 seconds",
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
                  "value": "54"
                },
                {
                  "level": 3,
                  "value": "58"
                },
                {
                  "level": 4,
                  "value": "62"
                },
                {
                  "level": 5,
                  "value": "66"
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
              "label": "Data 3",
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
              "label": "Data 4",
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
            }
          ],
          "spCost": "46 + (Skill Level × 4)",
          "duration": "180 seconds",
          "areaOfEffect": "31 x 31",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/309.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/309",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 322,
                "level": 10,
                "name": "Song of Lutie",
                "visible": true
              }
            ]
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
                "value": "46 + (Skill Level × 4)"
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
                "value": "20 seconds"
              },
              {
                "label": "Target",
                "value": "Self and Party members around 31 X 31 cell"
              },
              {
                "label": "Area of Effect",
                "value": "31 x 31"
              },
              {
                "label": "Duration",
                "value": "180 seconds"
              }
            ],
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
                    "id": "data-3",
                    "label": "Data 3"
                  },
                  {
                    "id": "data-4",
                    "label": "Data 4"
                  },
                  {
                    "id": "def",
                    "label": "Def"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "atk": "+ 20",
                      "def": "+ 15",
                      "sp-cost": "50",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "20",
                      "data-4": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "atk": "+ 25",
                      "def": "+ 30",
                      "sp-cost": "54",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "25",
                      "data-4": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "atk": "+ 30",
                      "def": "+ 45",
                      "sp-cost": "58",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "30",
                      "data-4": "45"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "atk": "+ 35",
                      "def": "+ 60",
                      "sp-cost": "62",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "35",
                      "data-4": "60"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "atk": "+ 40",
                      "def": "+ 75",
                      "sp-cost": "66",
                      "data-1": "60000",
                      "data-2": "15",
                      "data-3": "40",
                      "data-4": "75"
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
          "id": 312,
          "imageFile": "312.png",
          "name": "Power Cord",
          "maxLevel": 1,
          "prerequisiteText": "Lullaby 1",
          "group": "Active",
          "type": "Ensemble Skill",
          "target": "Self and Party members around 31 X 31 cell",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Power_Cord",
          "description": "On-screen (31x31), Casts a skill to yourself and your party members that nullifies gemstone by 1 when using magic.\nIt does not overlap with other Ensemble Skill and can only be used when the caster is equipping whips / instruments.\nEnsemble Skill only activates when Bard/ Dancer is within 9 X 9 cell. When Ensemble Skill is used, caster and partner becomes Aftereffect.\nCannot use skills, movement speed and ASP reduction for 10 sec.",
          "levelDetails": [],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.3 seconds",
          "cooldown": "20 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "70"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "60000"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "15"
                }
              ]
            }
          ],
          "spCost": "70",
          "duration": "180 seconds",
          "areaOfEffect": "31 x 31",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/312.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/312",
          "tree": {
            "idx": 23,
            "row": 3,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 306,
                "level": 1,
                "name": "Lullaby",
                "visible": true
              }
            ]
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
                "value": "70"
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
                "value": "20 seconds"
              },
              {
                "label": "Target",
                "value": "Self and Party members around 31 X 31 cell"
              },
              {
                "label": "Area of Effect",
                "value": "31 x 31"
              },
              {
                "label": "Duration",
                "value": "180 seconds"
              }
            ],
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
                      "sp-cost": "70",
                      "data-1": "60000",
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 308,
          "imageFile": "308.png",
          "name": "Down Tempo",
          "maxLevel": 1,
          "prerequisiteText": "Classic Pluck 1",
          "group": "Active",
          "type": "ensemble skill",
          "target": "9*9 cells around the user",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Down_Tempo",
          "description": "Performs an ensemble that will nullify all defense of all enemies around the performers.\nThis skill cannot be overlapped with other ensemble skills, and can only be used when the caster is equipped with an instrument or whip.\nEnsemble skill is activated when the bard / dancer in the party is within 9 x 9 cells\nEnters a ensemble aftermath(unavailable skill, reduced movement speed and attack speed) for 10 seconds.\nThis skill can only be used in PVP / Sieze Mode.",
          "levelDetails": [],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.3 seconds",
          "cooldown": "60 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "120"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "60000"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "4"
                }
              ]
            }
          ],
          "spCost": "120",
          "duration": "60 seconds",
          "areaOfEffect": "9 x 9",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/308.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/308",
          "tree": {
            "idx": 24,
            "row": 3,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 311,
                "level": 1,
                "name": "Classical Pluck",
                "visible": true
              }
            ]
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
                "value": "120"
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
                "value": "60 seconds"
              },
              {
                "label": "Target",
                "value": "9*9 cells around the user"
              },
              {
                "label": "Area of Effect",
                "value": "9 x 9"
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
                      "sp-cost": "120",
                      "data-1": "60000",
                      "data-2": "4"
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
          "id": 307,
          "imageFile": "307.png",
          "name": "Mental Sensing",
          "maxLevel": 5,
          "prerequisiteText": "Acoustic Rhythm 3",
          "group": "Active",
          "type": "Ensemble Skill",
          "target": "Self and Party members around 31 X 31 cell",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Mental_Sensing",
          "description": "On-screen (31x31) Gives yourself and your party members a chance to gain EXP points based on its skill level when fighting monsters.\nIt does not overlap with other Ensemble Skill and can only be used when the caster is equipping whips.\nEnsemble Skill only activates when Bard/ Dancer is within 9 X 9 cell. When Ensemble Skill is used, caster and partner becomes Aftereffect.\nCannot use skills, movement speed and ASP reduction for 10 sec.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Exp Increase : 20%"
            },
            {
              "level": 2,
              "text": "Exp Increase : 30%"
            },
            {
              "level": 3,
              "text": "Exp Increase : 40%"
            },
            {
              "level": 4,
              "text": "Exp Increase : 50%"
            },
            {
              "level": 5,
              "text": "Exp Increase : 60%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.3 seconds",
          "cooldown": "20 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "62"
                },
                {
                  "level": 2,
                  "value": "68"
                },
                {
                  "level": 3,
                  "value": "74"
                },
                {
                  "level": 4,
                  "value": "80"
                },
                {
                  "level": 5,
                  "value": "86"
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
                },
                {
                  "level": 5,
                  "value": "15"
                }
              ]
            }
          ],
          "spCost": "20",
          "duration": "180 seconds",
          "areaOfEffect": "31 x 31",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/307.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/307",
          "tree": {
            "idx": 25,
            "row": 3,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 313,
                "level": 3,
                "name": "Acoustic Rhythm",
                "visible": true
              }
            ]
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
                "value": "20 seconds"
              },
              {
                "label": "Target",
                "value": "Self and Party members around 31 X 31 cell"
              },
              {
                "label": "Area of Effect",
                "value": "31 x 31"
              },
              {
                "label": "Duration",
                "value": "180 seconds"
              }
            ],
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
                      "effect": "E x p Increase : 20%",
                      "sp-cost": "62",
                      "data-1": "60000",
                      "data-2": "20",
                      "data-3": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "E x p Increase : 30%",
                      "sp-cost": "68",
                      "data-1": "60000",
                      "data-2": "30",
                      "data-3": "15"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "E x p Increase : 40%",
                      "sp-cost": "74",
                      "data-1": "60000",
                      "data-2": "40",
                      "data-3": "15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "E x p Increase : 50%",
                      "sp-cost": "80",
                      "data-1": "60000",
                      "data-2": "50",
                      "data-3": "15"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "E x p Increase : 60%",
                      "sp-cost": "86",
                      "data-1": "60000",
                      "data-2": "60",
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 310,
          "imageFile": "310.png",
          "name": "Harmonic Lick",
          "maxLevel": 5,
          "prerequisiteText": "Battle Theme 3",
          "group": "Active",
          "type": "ensemble skill",
          "target": "31*31 cells around the user",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Harmonic_Lick",
          "description": "Performs an ensemble that will add piercing damage on the attack of all players around the performers.\nThis skill cannot be overlapped with other ensemble skills, and can only be used when the caster is equipped with an instrument or whip.\nEnsemble skill is activated when the bard / dancer in the party is within 9 x 9 cells\nEnters a ensemble aftermath(unavailable skill, reduced movement speed and attack speed) for 10 seconds.\nATK speed 20% increase.\nPATK speed 20% increase.\nMATK power 20% increase.\nMaximum HP 30% increase.\nMaximum SP 30% increase.\nEvery status 15 increase.\nHIT 50 increase.\nFLEE 50 increase.\nSP consumption 30% decrease.\nHP recovery 100% increase.\nSP recovery 100% increase.",
          "levelDetails": [],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "3 seconds",
          "castDelay": "0.3 seconds",
          "cooldown": "20 seconds",
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
                  "value": "60"
                },
                {
                  "level": 3,
                  "value": "56"
                },
                {
                  "level": 4,
                  "value": "52"
                },
                {
                  "level": 5,
                  "value": "48"
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
          "spCost": "35 + (Skill Level × 3)",
          "duration": "60 seconds",
          "areaOfEffect": "31 x 31",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/310.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/310",
          "tree": {
            "idx": 26,
            "row": 3,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 309,
                "level": 3,
                "name": "Battle Theme",
                "visible": true
              }
            ]
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
                "value": "35 + (Skill Level × 3)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "3 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "20 seconds"
              },
              {
                "label": "Target",
                "value": "31*31 cells around the user"
              },
              {
                "label": "Area of Effect",
                "value": "31 x 31"
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
                      "sp-cost": "64",
                      "data-1": "60000",
                      "data-2": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "60",
                      "data-1": "60000",
                      "data-2": "15"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "56",
                      "data-1": "60000",
                      "data-2": "15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "52",
                      "data-1": "60000",
                      "data-2": "15"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "48",
                      "data-1": "60000",
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 394,
          "imageFile": "394.png",
          "name": "Arrow Vulcan",
          "maxLevel": 10,
          "prerequisiteText": "Double Strafe 5, Arrow Shower 5, Melody Strike(Slinging Arrow) 1",
          "group": "Active",
          "type": "Ranged Physical Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "1 Arrow",
          "irowikiUrl": "https://irowiki.org/wiki/Arrow_Vulcan",
          "description": "Fire an awesome flurry of arrows at\na targeted enemy. Requires Musical Instrument\nClass Weaponfor Minstrels and Whip Class Weapon\nfor Gypsies.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 600%"
            },
            {
              "level": 2,
              "text": "ATK 700%"
            },
            {
              "level": 3,
              "text": "ATK 800%"
            },
            {
              "level": 4,
              "text": "ATK 900%"
            },
            {
              "level": 5,
              "text": "ATK1000%"
            },
            {
              "level": 6,
              "text": "ATK1100%"
            },
            {
              "level": 7,
              "text": "ATK1200%"
            },
            {
              "level": 8,
              "text": "ATK1300%"
            },
            {
              "level": 9,
              "text": "ATK1400%"
            },
            {
              "level": 10,
              "text": "ATK1500%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1.5 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "1.5 seconds",
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
          "spCost": "10 + (Skill Level × 2)",
          "castRange": "10 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/394.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/394",
          "tree": {
            "idx": 29,
            "row": 4,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 46,
                "level": 5,
                "name": "Double Strafe",
                "visible": false
              },
              {
                "id": 47,
                "level": 5,
                "name": "Arrow Shower",
                "visible": false
              },
              {
                "id": 316,
                "level": 1,
                "name": "Melody Strike",
                "visible": true
              }
            ]
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
                "value": "10 + (Skill Level × 2)"
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
                "value": "1.5 seconds"
              },
              {
                "label": "Cast Range",
                "value": "10 cells"
              },
              {
                "label": "Target",
                "value": "1 Target"
              },
              {
                "label": "Ammunition",
                "value": "1 Arrow"
              }
            ],
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
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "ATK1000%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "ATK1100%",
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "ATK1200%",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "ATK1300%",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "ATK1400%",
                      "sp-cost": "28"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "ATK1500%",
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
          "id": 395,
          "imageFile": "395.png",
          "name": "Sheltering Bliss",
          "maxLevel": 5,
          "prerequisiteText": "Improve Concentration 5, Music(Dance) Lessons 7",
          "group": "Active",
          "type": "Ensemble",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Sheltering_Bliss",
          "description": "A Minstrel and Gypsy Ensemble Skill\nthat creates a 5*5 cell area around the casters\nwhere other players and monsters cannot enter.\nThis skill cannot offer protection from magic\nor long ranged attacks. This skill cannot be\ncast in areas that are adjacent to obstacles.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration 20 sec"
            },
            {
              "level": 2,
              "text": "Duration 25 sec"
            },
            {
              "level": 3,
              "text": "Duration 30 sec"
            },
            {
              "level": 4,
              "text": "Duration 35 sec"
            },
            {
              "level": 5,
              "text": "Duration 40 sec"
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
          "spCost": "20 + (Skill Level × 10)",
          "duration": "15 + (Skill Level × 5)",
          "areaOfEffect": "9 x 9",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/395.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/395",
          "tree": {
            "idx": 30,
            "row": 4,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 45,
                "level": 5,
                "name": "Improve Concentration",
                "visible": false
              },
              {
                "id": 315,
                "level": 7,
                "name": "Music Lessons",
                "visible": true
              }
            ]
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
                "value": "20 + (Skill Level × 10)"
              },
              {
                "label": "Target",
                "value": "Immediately"
              },
              {
                "label": "Area of Effect",
                "value": "9 x 9"
              }
            ],
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
                      "duration": "20 seconds",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "25 seconds",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "30 seconds",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "35 seconds",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "40 seconds",
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
          "id": 396,
          "imageFile": "396.png",
          "name": "Marionette Control",
          "maxLevel": 1,
          "prerequisiteText": "Improve Concentration 10, Music(Dance) Lessons 5",
          "group": "Active",
          "type": "Buff",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Marionette_Control",
          "description": "Targeted Party Member receives a\nbonus to all Stats equal to half of the Stats\nof the caster. However, each of the target's\nStats cannot exceed 99. This skill is cancelled\nif this Party Member is more than 7 cells away\nfrom the caster.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "100"
                }
              ]
            }
          ],
          "spCost": "100",
          "castDelay": "1 second",
          "duration": "Until recast",
          "castRange": "8 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/396.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/396",
          "tree": {
            "idx": 31,
            "row": 4,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 45,
                "level": 10,
                "name": "Improve Concentration",
                "visible": false
              },
              {
                "id": 315,
                "level": 5,
                "name": "Music Lessons",
                "visible": true
              }
            ]
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
                "value": "100"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cast Range",
                "value": "8 cells"
              },
              {
                "label": "Target",
                "value": "1 Target"
              },
              {
                "label": "Duration",
                "value": "Until recast"
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
          "id": 488,
          "imageFile": "488.png",
          "name": "Hermode's Rod",
          "maxLevel": 5,
          "prerequisiteText": "Improve Concentration 10, Music(Dance) Lessons 10",
          "group": "Active",
          "type": "Debuff",
          "target": "Music&Dance",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Hermode's_Rod",
          "description": "This skill can only be used near\nWarp Portals inside Guild Siege maps during WoE\ntimes. Hermode's Rod will cancel all positive\nstatuses, aside from Berserk, from all friendly\ntargets except for the caster, and will block\nany magic spells cast of this skill's targets.\nNo one including the caster can use any skills\nfor the skill's duration, but Hermode's Rod is\ncanceled upon leaving its effective range.",
          "levelDetails": [
            {
              "level": 1,
              "text": "10 Sec Duration"
            },
            {
              "level": 2,
              "text": "20 Sec Duration"
            },
            {
              "level": 3,
              "text": "30 Sec Duration"
            },
            {
              "level": 4,
              "text": "40 Sec Duration"
            },
            {
              "level": 5,
              "text": "50 Sec Duration"
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
          "spCost": "10 + (Skill Level × 10)",
          "duration": "(Skill Level × 10) seconds",
          "areaOfEffect": "7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/488.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/488",
          "tree": {
            "idx": 32,
            "row": 4,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 45,
                "level": 10,
                "name": "Improve Concentration",
                "visible": false
              },
              {
                "id": 315,
                "level": 10,
                "name": "Music Lessons",
                "visible": true
              }
            ]
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
                "label": "Target",
                "value": "Music&Dance"
              },
              {
                "label": "Area of Effect",
                "value": "7 x 7"
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
                      "effect": "10 Sec Duration",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "20 Sec Duration",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "30 Sec Duration",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "40 Sec Duration",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "50 Sec Duration",
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
          "id": 5068,
          "imageFile": "5068.png",
          "name": "Skilled Special Singer",
          "maxLevel": 1,
          "prerequisiteText": "Marionette Control 1,",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Skilled_Special_Singer",
          "description": "Overcome fatigue after ensemble by gypsy and clown right away.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.3 seconds",
          "cooldown": "60 seconds",
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
          "spCost": "1",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5068.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5068",
          "tree": {
            "idx": 38,
            "row": 5,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 315,
                "level": 10,
                "name": "Music Lessons",
                "visible": true
              },
              {
                "id": 317,
                "level": 3,
                "name": "Unchained Serenade",
                "visible": true
              },
              {
                "id": 396,
                "level": 1,
                "name": "Marionette Control",
                "visible": true
              }
            ]
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
                "value": "0.3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "60 seconds"
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 489,
          "imageFile": "489.png",
          "name": "Tarot Card of Fate",
          "maxLevel": 5,
          "prerequisiteText": "Improve Concentration 10, Unchained Serenade(Hip Shaker) 3",
          "group": "Active",
          "type": "Debuff",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Tarot_Card_of_Fate",
          "description": "Cast a randomly chosen effect from\none out of 14 tarot cards. The level of this\nskill affects the chance of success.",
          "levelDetails": [
            {
              "level": 1,
              "text": "8% Success Chance"
            },
            {
              "level": 2,
              "text": "16% Success Chance"
            },
            {
              "level": 3,
              "text": "24% Success Chance"
            },
            {
              "level": 4,
              "text": "32% Success Chance"
            },
            {
              "level": 5,
              "text": "40% Success Chance"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "0.5 seconds",
          "castDelay": "0.3 seconds",
          "cooldown": "3 seconds",
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
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/489.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/489",
          "tree": {
            "idx": 39,
            "row": 5,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 45,
                "level": 10,
                "name": "Improve Concentration",
                "visible": false
              },
              {
                "id": 317,
                "level": 3,
                "name": "Unchained Serenade",
                "visible": true
              }
            ]
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
                "value": "0.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.5 seconds"
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
                      "effect": "8% Success Chance",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "16% Success Chance",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "24% Success Chance",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "32% Success Chance",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "40% Success Chance",
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
        }
      ]
    },
    {
      "id": "previous-3",
      "label": "Archer",
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
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Owl's_Eye",
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
          "ammunition": "1 Arrow",
          "irowikiUrl": "https://irowiki.org/wiki/Arrow_Repel",
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
          "spCost": "15",
          "castRange": "(10 + Vulture's Eye Level) cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/148.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/148",
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
                "label": "Cast Range",
                "value": "(10 + Vulture's Eye Level) cells"
              },
              {
                "label": "Target",
                "value": "Enemy"
              },
              {
                "label": "Ammunition",
                "value": "1 Arrow"
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
                    "values": {}
                  },
                  {
                    "level": 3,
                    "values": {}
                  },
                  {
                    "level": 4,
                    "values": {}
                  },
                  {
                    "level": 5,
                    "values": {}
                  },
                  {
                    "level": 6,
                    "values": {}
                  },
                  {
                    "level": 7,
                    "values": {}
                  },
                  {
                    "level": 8,
                    "values": {}
                  },
                  {
                    "level": 9,
                    "values": {}
                  },
                  {
                    "level": 10,
                    "values": {}
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
          "id": 47,
          "imageFile": "47.png",
          "name": "Arrow Shower",
          "maxLevel": 10,
          "prerequisiteText": "Double Strafe 5",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "1 Arrow",
          "irowikiUrl": "https://irowiki.org/wiki/Arrow_Shower",
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
          "spCost": "15",
          "castDelay": "0.1 seconds",
          "cooldown": "0.3 seconds",
          "castRange": "(10 + Vulture's Eye Level) cells",
          "areaOfEffect": "3 x 3 ~ 5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/47.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/47",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
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
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "15"
              },
              {
                "label": "Cast Delay",
                "value": "0.1 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.3 seconds"
              },
              {
                "label": "Cast Range",
                "value": "(10 + Vulture's Eye Level) cells"
              },
              {
                "label": "Target",
                "value": "Ground"
              },
              {
                "label": "Area of Effect",
                "value": "3 x 3 ~ 5 x 5"
              },
              {
                "label": "Ammunition",
                "value": "1 Arrow"
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
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
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
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Arrow_Crafting",
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
          "spCost": "10",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/147.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/147",
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
                "value": "10"
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
          "ammunition": "",
          "irowikiUrl": "",
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
            "row": 2,
            "col": 3,
            "columns": 7,
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
                    "id": "duration",
                    "label": "Duration"
                  },
                  {
                    "id": "dex-agi",
                    "label": "Dex, Agi"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "60 seconds",
                      "dex-agi": "+ 3%",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "80 seconds",
                      "dex-agi": "+ 4%",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "100 seconds",
                      "dex-agi": "+ 5%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "120 seconds",
                      "dex-agi": "+ 6%",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "140 seconds",
                      "dex-agi": "+ 7%",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "160 seconds",
                      "dex-agi": "+ 8%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "180 seconds",
                      "dex-agi": "+ 9%",
                      "sp-cost": "55"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "200 seconds",
                      "dex-agi": "+10%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "220 seconds",
                      "dex-agi": "+11%",
                      "sp-cost": "65"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "240 seconds",
                      "dex-agi": "+12%",
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
        }
      ]
    }
  ],
  "skills": [
    {
      "id": 5355,
      "imageFile": "5355.png",
      "name": "Rhythm Shooting",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "Single Target",
      "recoversAp": "1(1~3Lv), 2(4~5Lv)",
      "consumesAp": "",
      "ammunition": "1 Arrows",
      "irowikiUrl": "https://irowiki.org/wiki/Rhythm_Shooting",
      "description": "Musical instrument, bow and whip only skill.\nFires an arrow to single target, deals 3 hits of long ranged physical damage.\nDeals additional damage depends on user's base level.\nWhen learning Stage Manner, CON will affect additional damage too.\nDeals more damage against target marked with sound brand.\n(Doesn't remove sound brand from target).\nConsumes 1 equipped arrow.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK Per Hit 1100%/ 1550%(sound brand)"
        },
        {
          "level": 2,
          "text": "ATK Per Hit 1750%/ 2300%(sound brand)"
        },
        {
          "level": 3,
          "text": "ATK Per Hit 2400%/ 3050%(sound brand)"
        },
        {
          "level": 4,
          "text": "ATK Per Hit 3050%/ 3880%(sound brand)"
        },
        {
          "level": 5,
          "text": "ATK Per Hit 3700%/ 4550%(sound brand)"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "2 seconds",
      "castDelay": "0 seconds",
      "cooldown": "0.35 seconds",
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
            }
          ]
        }
      ],
      "spCost": "60 + (Skill Level x 6)",
      "castRange": "9 cells",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5355.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5355",
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
            "value": "60 + (Skill Level x 6)"
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
            "label": "Ammunition",
            "value": "1 Arrows"
          },
          {
            "label": "AP Generated",
            "value": "1(1~3Lv), 2(4~5Lv)"
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
                  "sp-cost": "36"
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
                  "sp-cost": "44"
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
                  "sp-cost": "52"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Rhythm shooting",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/troubadour/rebalance_1.md",
          "section": "12.3",
          "notes": [
            "Reduces SP consumption from 128 to 90 based on level 5."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "128",
              "after": "90",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 128 to 90 based on level 5."
            }
          ]
        },
        {
          "skillName": "Rhythm Shooting",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/troubadour/rebalance_2.md",
          "section": "12.3",
          "notes": [
            "Adds 0.15 seconds cooldown.",
            "Removes 0.15 seconds delay after skill.",
            "Reduces SP consumption from 90 to 52 based on level 5.",
            "Increases damage from 600%/780%(branded target)Atk to 800%/1400%(branded target)Atk based on level 5.",
            "Increases factor weight of CON in skill formula from 2 to 3."
          ],
          "specRows": [
            {
              "label": "Cast Delay",
              "before": "0.15 seconds delay",
              "after": "Removed",
              "scope": "",
              "source": "Removes 0.15 seconds delay after skill."
            },
            {
              "label": "SP Cost",
              "before": "90",
              "after": "52",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 90 to 52 based on level 5."
            },
            {
              "label": "Damage",
              "before": "600%/780%(branded target)Atk",
              "after": "800%/1400%(branded target)Atk",
              "scope": "Lv 5",
              "source": "Increases damage from 600%/780%(branded target)Atk to 800%/1400%(branded target)Atk based on level 5."
            },
            {
              "label": "Factor Weight Of Con In Skill Formula",
              "before": "2",
              "after": "3",
              "scope": "",
              "source": "Increases factor weight of CON in skill formula from 2 to 3."
            }
          ]
        },
        {
          "skillName": "Rhythm Shooting",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/troubadour/rebalance_3.md",
          "section": "11.1",
          "notes": [
            "Increases skill cooldown from 0.15 seconds to 0.35 seconds.",
            "Increases base damage from 800%/1400%Atk to 3700%/4550%Atk per hit based on level 5.",
            "Increases factor weight of CON in skill formula from 3 to 5 (7 on targets marked with sound brand)."
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
              "label": "Damage",
              "before": "800%/1400%Atk",
              "after": "3700%/4550%Atk per hit",
              "scope": "Lv 5",
              "source": "Increases base damage from 800%/1400%Atk to 3700%/4550%Atk per hit based on level 5."
            },
            {
              "label": "Factor Weight Of Con In Skill Formula",
              "before": "3",
              "after": "5 (7 on targets marked with sound brand)",
              "scope": "",
              "source": "Increases factor weight of CON in skill formula from 3 to 5 (7 on targets marked with sound brand)."
            }
          ]
        },
        {
          "skillName": "Rhythm Shooting",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/troubadour/rebalance_4.md",
          "section": "12.1",
          "notes": [
            "Increases base damage from 3700%/4550%(sound brand)Atk to 5300%/6100%(sound brand)Atk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "3700%/4550%(sound brand)Atk",
              "after": "5300%/6100%(sound brand)Atk per hit",
              "scope": "Lv 5",
              "source": "Increases base damage from 3700%/4550%(sound brand)Atk to 5300%/6100%(sound brand)Atk per hit based on level 5."
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
      "id": 5349,
      "imageFile": "5349.png",
      "name": "Stage Etiquette",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Stage_Etiquette",
      "description": "Increase AP gain through your Troubadour/Trouvere Attack skills and improve certain Performance skills.\nInstruments, Bows, and Whips increase P. ATK and S. MATK.",
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
      "iconUrl": "assets/divine-pride/skills/5349.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5349",
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
      "id": 5357,
      "imageFile": "5357.png",
      "name": "Sound Blend(Sound Blend)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Magic",
      "target": "Single Target",
      "recoversAp": "1(1~3Lv), 2(4~5Lv)",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Instrument/Whip exclusive skills.\nLabels a single target with sound.\nAs the skill level increases, the duration of the brand increases.\nThe brand deals damage once before exploding, depending on the attribute of the arrow equipped by the caster.\nEnemies with a brand attached take more damage from vibration reverb, metallic sound, rose blossom, and rhythm shooting.\nDamage increases further based on the caster's base level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 120%/Duration: 10 seconds"
        },
        {
          "level": 2,
          "text": "MATK 240%/Duration: 10 seconds"
        },
        {
          "level": 3,
          "text": "MATK 360%/Duration: 15 seconds"
        },
        {
          "level": 4,
          "text": "MATK 480%/Duration: 15 seconds"
        },
        {
          "level": 5,
          "text": "MATK 600%/Duration: 20 seconds"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "1 second",
      "castDelay": "0.15 seconds",
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
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5357.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5357",
      "tree": {
        "idx": 7,
        "row": 1,
        "col": 0,
        "columns": 7,
        "requirements": [
          {
            "id": 2413,
            "level": 5,
            "name": "Metallic Sound",
            "visible": false
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
            "value": "0.15 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0 seconds"
          },
          {
            "label": "Target",
            "value": "Single Target"
          },
          {
            "label": "AP Generated",
            "value": "1(1~3Lv), 2(4~5Lv)"
          }
        ],
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
                  "sp-cost": "40"
                }
              },
              {
                "level": 2,
                "values": {
                  "duration": "10 seconds",
                  "sp-cost": "50"
                }
              },
              {
                "level": 3,
                "values": {
                  "duration": "15 seconds",
                  "sp-cost": "60"
                }
              },
              {
                "level": 4,
                "values": {
                  "duration": "15 seconds",
                  "sp-cost": "70"
                }
              },
              {
                "level": 5,
                "values": {
                  "duration": "20 seconds",
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
          "skillName": "Sound Blend",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/troubadour/rebalance_1.md",
          "section": "12.1",
          "notes": [
            "Removes fixed casting time based on level 5.",
            "Reduces variable casting time from 2 seconds to 1 second based on level 5.",
            "Reduces AP recovery rate from 3 to 2 based on level 5."
          ],
          "specRows": [
            {
              "label": "Fixed Casting Time Based On Level 5",
              "before": "fi x ed casting time based on level 5",
              "after": "Removed",
              "scope": "",
              "source": "Removes fixed casting time based on level 5."
            },
            {
              "label": "Variable Casting Time",
              "before": "2 seconds",
              "after": "1 second",
              "scope": "Lv 5",
              "source": "Reduces variable casting time from 2 seconds to 1 second based on level 5."
            },
            {
              "label": "AP Generated",
              "before": "3",
              "after": "2",
              "scope": "Lv 5",
              "source": "Reduces AP recovery rate from 3 to 2 based on level 5."
            }
          ]
        },
        {
          "skillName": "Sound Blend",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/troubadour/rebalance_2.md",
          "section": "12.1",
          "notes": [
            "Reduces SP consumption from 128 to 80 based on level 5."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "128",
              "after": "80",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 128 to 80 based on level 5."
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
      "id": 5350,
      "imageFile": "5350.png",
      "name": "Retrospection",
      "maxLevel": 1,
      "prerequisiteText": "Stage Etiquette Lv. 1",
      "group": "Active",
      "type": "Support",
      "target": "Self",
      "recoversAp": "1",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Retrospection",
      "description": "Cast again the last Song skill you've used.\nThe recast skill consumes 30% less SP and gains 1.5 times the AP.",
      "levelDetails": [],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.3 seconds",
      "cooldown": "5 seconds",
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
      "spCost": "1",
      "duration": "seconds",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5350.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5350",
      "tree": {
        "idx": 9,
        "row": 1,
        "col": 2,
        "columns": 7,
        "requirements": [
          {
            "id": 5349,
            "level": 1,
            "name": "Stage Etiquette",
            "visible": true
          }
        ]
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
            "value": "0.3 seconds"
          },
          {
            "label": "Cooldown",
            "value": "5 seconds"
          },
          {
            "label": "Target",
            "value": "Self"
          },
          {
            "label": "Duration",
            "value": "seconds"
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
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5358,
      "imageFile": "5358.png",
      "name": "Geffenia Nocturne",
      "maxLevel": 5,
      "prerequisiteText": "Stage Etiquette Lv. 3",
      "group": "Active",
      "type": "Debuff",
      "target": "Enemies within range",
      "recoversAp": "20",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Geffenia_Nocturne",
      "description": "An Instrument/Whip skill.\nCreate a chance of decreasing Magic Resistance for 30 seconds for Normal monsters and enemy players within range.\nThis skill's effect improves if a partner in your party is within your screen.\nConsumes 1 Throat Lozenge.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0 seconds",
      "cooldown": "10 seconds",
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
              "value": "160"
            },
            {
              "level": 3,
              "value": "200"
            },
            {
              "level": 4,
              "value": "240"
            },
            {
              "level": 5,
              "value": "280"
            }
          ]
        }
      ],
      "spCost": "80 + (Skill Level x 40)",
      "duration": "30 seconds",
      "castRange": "15 x 15 ~ 23 x 23 cells",
      "areaOfEffect": "15 x 15 ~ 23 x 23",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5358.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5358",
      "tree": {
        "idx": 10,
        "row": 1,
        "col": 3,
        "columns": 7,
        "requirements": [
          {
            "id": 5349,
            "level": 3,
            "name": "Stage Etiquette",
            "visible": true
          }
        ]
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
            "value": "80 + (Skill Level x 40)"
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
            "value": "10 seconds"
          },
          {
            "label": "Cast Range",
            "value": "15 x 15 ~ 23 x 23 cells"
          },
          {
            "label": "Target",
            "value": "Enemies within range"
          },
          {
            "label": "Area of Effect",
            "value": "15 x 15 ~ 23 x 23"
          },
          {
            "label": "Duration",
            "value": "30 seconds"
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
                  "sp-cost": "160"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "200"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "240"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "280"
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
      "id": 5360,
      "imageFile": "5360.png",
      "name": "Miner Rhapsody",
      "maxLevel": 5,
      "prerequisiteText": "Stage Etiquette Lv. 3",
      "group": "Active",
      "type": "Debuff",
      "target": "Enemies within range",
      "recoversAp": "20",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Miner_Rhapsody",
      "description": "An Instrument/Whip skill.\nCreate a chance of decreasing Physical Resistance for 30 seconds for Normal monsters and enemy players within range.\nThis skill's effect improves if a partner in your party is within your screen.\nConsumes 1 Throat Lozenge.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0 seconds",
      "cooldown": "10 seconds",
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
              "value": "160"
            },
            {
              "level": 3,
              "value": "200"
            },
            {
              "level": 4,
              "value": "240"
            },
            {
              "level": 5,
              "value": "280"
            }
          ]
        }
      ],
      "spCost": "80 + (Skill Level x 40)",
      "duration": "30 seconds",
      "areaOfEffect": "15 x 15 ~ 23 x 23",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5360.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5360",
      "tree": {
        "idx": 11,
        "row": 1,
        "col": 4,
        "columns": 7,
        "requirements": [
          {
            "id": 5349,
            "level": 3,
            "name": "Stage Etiquette",
            "visible": true
          }
        ]
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
            "value": "80 + (Skill Level x 40)"
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
            "value": "10 seconds"
          },
          {
            "label": "Target",
            "value": "Enemies within range"
          },
          {
            "label": "Area of Effect",
            "value": "15 x 15 ~ 23 x 23"
          },
          {
            "label": "Duration",
            "value": "30 seconds"
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
                  "sp-cost": "160"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "200"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "240"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "280"
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
      "id": 5356,
      "imageFile": "5356.png",
      "name": "Metalic Fury",
      "maxLevel": 5,
      "prerequisiteText": "Sound Blend 1",
      "group": "Active",
      "type": "Magic",
      "target": "Single Target",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Musical instrument and whip only skill.\nFires the sonic magical arrow to single target, dealing magical damage to the target and surrounding enemies around the target.\nDeals higher damage against target marked with sound brand.\n(Doesn't remove sound brand from target).\nDeals additional damage depends on Stage Manner skill level, user's base level and SPL.\nThe skill property depends on the property of equipped arrow.\nConsumes 1 equipped arrow.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 2600%/3600%(sound brand)/Range: 5x5"
        },
        {
          "level": 2,
          "text": "MATK 5200%/7200%(sound brand)/Range: 5x5"
        },
        {
          "level": 3,
          "text": "MATK 7800%/10800%(sound brand)/Range: 5x5"
        },
        {
          "level": 4,
          "text": "MATK 10400%/14400%(sound brand)/Range: 7x7"
        },
        {
          "level": 5,
          "text": "MATK 13000%/18000%(sound brand)/Range: 9x9"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "0.4 seconds",
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
      "iconUrl": "assets/divine-pride/skills/5356.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5356",
      "tree": {
        "idx": 14,
        "row": 2,
        "col": 0,
        "columns": 7,
        "requirements": [
          {
            "id": 5357,
            "level": 1,
            "name": "Sound Blend",
            "visible": true
          }
        ]
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
            "value": "0.4 seconds"
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
                  "sp-cost": "70"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "76"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "82"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "88"
                }
              },
              {
                "level": 5,
                "values": {
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
          "skillName": "Metallic Fury",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/troubadour/rebalance_1.md",
          "section": "12.2",
          "notes": [
            "Reduces cooldown from 1 second to 0.5 seconds based on level 5.",
            "Reduces AP recovery rate from 5 to 3 based on level 5.",
            "Increases damage from 3000%Matk to 4500%Matk based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 1 second to 0.5 seconds based on level 5."
            },
            {
              "label": "AP Generated",
              "before": "5",
              "after": "3",
              "scope": "Lv 5",
              "source": "Reduces AP recovery rate from 5 to 3 based on level 5."
            },
            {
              "label": "Damage",
              "before": "3000%Matk",
              "after": "4500%Matk",
              "scope": "Lv 5",
              "source": "Increases damage from 3000%Matk to 4500%Matk based on level 5."
            }
          ]
        },
        {
          "skillName": "Metallic Fury",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/troubadour/rebalance_2.md",
          "section": "12.2",
          "notes": [
            "Reduces cooldown from 0.5 seconds to 0.3 seconds.",
            "Reduces SP consumption from 168 to 94 based on level 5.",
            "Reduces AP recovery rate from 3 to 2 based on level 5.",
            "Increases damage from 4500%/4950~6750%(area damage according to number of branded target)Matk to 11000%/12500~18500%(area damage according to number of branded target)Matk based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.5 seconds",
              "after": "0.3 seconds",
              "scope": "",
              "source": "Reduces cooldown from 0.5 seconds to 0.3 seconds."
            },
            {
              "label": "SP Cost",
              "before": "168",
              "after": "94",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 168 to 94 based on level 5."
            },
            {
              "label": "AP Generated",
              "before": "3",
              "after": "2",
              "scope": "Lv 5",
              "source": "Reduces AP recovery rate from 3 to 2 based on level 5."
            },
            {
              "label": "Damage",
              "before": "4500%/4950~6750%(area damage according",
              "after": "number of branded target)Matk to 11000%/12500~18500%(area damage according to number of branded target)Matk",
              "scope": "Lv 5",
              "source": "Increases damage from 4500%/4950~6750%(area damage according to number of branded target)Matk to 11000%/12500~18500%(area damage according to number of branded target)Matk based on level 5."
            }
          ]
        },
        {
          "skillName": "Metallic Fury",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/troubadour/rebalance_3.md",
          "section": "11.2",
          "notes": [
            "Reworks skill to dealing damage to surrounding enemies around the target (9 x 9 cells based on level 5).",
            "Increases skill cooldown from 0.3 seconds to 0.4 seconds.",
            "Increases global cooldown from 0.3 seconds to 0.5 seconds.",
            "No longer remove sound brand debuff from target. (doesn't mention it changelog but it works)",
            "Increases base damage from 11000%Matk to 13000%/18000%(targets marked with sound brand)Matk based on level 5.",
            "Increases factor weight of SPL in skill formula (on targets marked with sound brand) from 1.5x of Stage Manner skill level to 2x of Stage Manner skill level."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.3 seconds",
              "after": "0.4 seconds",
              "scope": "",
              "source": "Increases skill cooldown from 0.3 seconds to 0.4 seconds."
            },
            {
              "label": "Cooldown",
              "before": "0.3 seconds",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Increases global cooldown from 0.3 seconds to 0.5 seconds."
            },
            {
              "label": "Damage",
              "before": "11000%Matk",
              "after": "13000%/18000%(targets marked with sound brand)Matk",
              "scope": "Lv 5",
              "source": "Increases base damage from 11000%Matk to 13000%/18000%(targets marked with sound brand)Matk based on level 5."
            },
            {
              "label": "Factor Weight Of Spl In Skill Formula (on Targets Marked With Sound Brand)",
              "before": "1.5 x of Stage Manner skill level",
              "after": "2 x of Stage Manner skill level",
              "scope": "",
              "source": "Increases factor weight of SPL in skill formula (on targets marked with sound brand) from 1.5x of Stage Manner skill level to 2x of Stage Manner skill level."
            }
          ]
        },
        {
          "skillName": "Metallic Fury",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/troubadour/rebalance_4.md",
          "section": "12.2",
          "notes": [
            "Increases base damage from 13000%/18000%(sound brand)Matk to 19250%/23250%(sound brand)Matk based on level 5.",
            "Changes sound effect."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "13000%/18000%(sound brand)Matk",
              "after": "19250%/23250%(sound brand)Matk",
              "scope": "Lv 5",
              "source": "Increases base damage from 13000%/18000%(sound brand)Matk to 19250%/23250%(sound brand)Matk based on level 5."
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
      "id": 5353,
      "imageFile": "5353.png",
      "name": "Rose Blossom(Rose Blossom)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Ranged physical",
      "target": "Single Target",
      "recoversAp": "3",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Skills exclusive to instruments/bows/whips.\nPlant a flower seed in an arrow, dealing Ranged physical damage to a designated Single Target.\nAfter a certain amount of time, the target will bloom, dealing additional Ranged physical damage to the target and surrounding enemies.\nDamage increases additionally based on the caster's base level.\nLearn Stage Etiquette to further increase damage based on your CON.\nIf the target is affected by the sound branding effect from Sound Blend, it deals greater damage.\n(This effect does not remove the sound mark.)\nConsumes 1 equipped arrow.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 2200%/3050%(range)/range: 5x5\nSound mark: ATK 2400%/3250%(range)/range: 5x5"
        },
        {
          "level": 2,
          "text": "ATK 4200%/5850%(range)/range: 5x5\nSound mark: ATK 4600%/6250%(range)/range: 5x5"
        },
        {
          "level": 3,
          "text": "ATK 6200%/8650%(range)/range: 7x7\nSound mark: ATK 6800%/9250%(range)/range: 7x7"
        },
        {
          "level": 4,
          "text": "ATK 8200%/11450%(range)/range: 7x7\nSound mark: ATK 9000%/12250%(range)/range: 7x7"
        },
        {
          "level": 5,
          "text": "ATK 10200%/14250%(range)/range: 9x9\nSound mark: ATK 11200%/15250%(range)/range: 9x9"
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
      "iconUrl": "assets/divine-pride/skills/5353.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5353",
      "tree": {
        "idx": 15,
        "row": 2,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 5355,
            "level": 3,
            "name": "Rhythm Shooting",
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
                  "sp-cost": "76"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "82"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "88"
                }
              },
              {
                "level": 5,
                "values": {
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
          "skillName": "Rose Blossom",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/troubadour/rebalance_1.md",
          "section": "12.4",
          "notes": [
            "Reduces cooldown from 3 seconds to 0.5 second based on level 5.",
            "Reduces SP consumption from 275 to 125 based on level 5.",
            "Reduces AP recovery rate from 5 to 3 based on level 5.",
            "Increases damage of the primary attack from 2500%Atk to 3750%Atk based on level 5.",
            "Increases damage of the secondary attack from 750%Atk to 1750%Atk based on level 5.",
            "Increases damage of the primary attack to the target marked with brand from 3250%Atk to 5000%Atk based on level 5.",
            "Increases damage of the secondary attack to the target marked with brand from 975%Atk to 3750%Atk based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "3 seconds",
              "after": "0.5 second",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 3 seconds to 0.5 second based on level 5."
            },
            {
              "label": "SP Cost",
              "before": "275",
              "after": "125",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 275 to 125 based on level 5."
            },
            {
              "label": "AP Generated",
              "before": "5",
              "after": "3",
              "scope": "Lv 5",
              "source": "Reduces AP recovery rate from 5 to 3 based on level 5."
            },
            {
              "label": "Damage",
              "before": "2500%Atk (primary attack)/750%Atk (secondary attack)/3250%Atk (primary attack to the target marked with brand)/975%Atk (secondary attack to the target marked with brand)",
              "after": "3750%Atk (primary attack)/1750%Atk (secondary attack)/5000%Atk (primary attack to the target marked with brand)/3750%Atk (secondary attack to the target marked with brand)",
              "scope": "Lv 5",
              "source": "Increases damage of the primary attack from 2500%Atk to 3750%Atk based on level 5. / Increases damage of the secondary attack from 750%Atk to 1750%Atk based on level 5. / Increases damage of the primary attack to the target marked with brand from 3250%Atk to 5000%Atk based on level 5. / Increases damage of the secondary attack to the target marked with brand from 975%Atk to 3750%Atk based on level 5."
            }
          ]
        },
        {
          "skillName": "Rose Blossom",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/troubadour/rebalance_2.md",
          "section": "12.4",
          "notes": [
            "Reduces variable casting time from 2 seconds to 1 second.",
            "Increases cooldown from 0.5 seconds to 0.7 seconds.",
            "Reduces SP consumption from 125 to 94 based on level 5.",
            "Increases damage from 3750%/1750%(area damage)Atk to 11200%/15250%(area damage)Atk based on level 5.",
            "Increases factor weight of CON in skill formula from 3/2(area damage) to 3/3(area damage)."
          ],
          "specRows": [
            {
              "label": "Variable Casting Time",
              "before": "2 seconds",
              "after": "1 second",
              "scope": "",
              "source": "Reduces variable casting time from 2 seconds to 1 second."
            },
            {
              "label": "Cooldown",
              "before": "0.5 seconds",
              "after": "0.7 seconds",
              "scope": "",
              "source": "Increases cooldown from 0.5 seconds to 0.7 seconds."
            },
            {
              "label": "SP Cost",
              "before": "125",
              "after": "94",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 125 to 94 based on level 5."
            },
            {
              "label": "Damage",
              "before": "3750%/1750%(area damage)Atk",
              "after": "11200%/15250%(area damage)Atk",
              "scope": "Lv 5",
              "source": "Increases damage from 3750%/1750%(area damage)Atk to 11200%/15250%(area damage)Atk based on level 5."
            },
            {
              "label": "Factor Weight Of Con In Skill Formula",
              "before": "3/2(area damage)",
              "after": "3/3(area damage)",
              "scope": "",
              "source": "Increases factor weight of CON in skill formula from 3/2(area damage) to 3/3(area damage)."
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
      "id": 5362,
      "imageFile": "5362.png",
      "name": "Jawaii Serenade",
      "maxLevel": 5,
      "prerequisiteText": "Geffenia Nocturne Lv. 1",
      "group": "Active",
      "type": "Buff",
      "target": "You and party members",
      "recoversAp": "10",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Jawaii_Serenade",
      "description": "An Instrument/Whip skill.\nIncrease S. MATK and MSPD for 180 seconds for you and surrounding party members.\nThis skill's effect improves if a partner in your party is within your screen.\nConsumes 1 Throat Lozenge.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0 seconds",
      "cooldown": "10 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "140"
            },
            {
              "level": 2,
              "value": "150"
            },
            {
              "level": 3,
              "value": "160"
            },
            {
              "level": 4,
              "value": "170"
            },
            {
              "level": 5,
              "value": "180"
            }
          ]
        }
      ],
      "spCost": "130 + (Skill Level x 10)",
      "duration": "180 seconds",
      "areaOfEffect": "15 x 15 ~ 23 x 23",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5362.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5362",
      "tree": {
        "idx": 17,
        "row": 2,
        "col": 3,
        "columns": 7,
        "requirements": [
          {
            "id": 5358,
            "level": 1,
            "name": "Geffenia Nocturne",
            "visible": true
          }
        ]
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
            "value": "130 + (Skill Level x 10)"
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
            "value": "10 seconds"
          },
          {
            "label": "Target",
            "value": "You and party members"
          },
          {
            "label": "Area of Effect",
            "value": "15 x 15 ~ 23 x 23"
          },
          {
            "label": "Duration",
            "value": "180 seconds"
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
                  "sp-cost": "140"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "150"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "160"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "170"
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
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5361,
      "imageFile": "5361.png",
      "name": "Musical Interlude",
      "maxLevel": 5,
      "prerequisiteText": "Miner Rhapsody Lv. 1",
      "group": "Active",
      "type": "Buff",
      "target": "You and party members",
      "recoversAp": "10",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Musical_Interlude",
      "description": "An Instrument/Whip skill.\nIncrease Physical Resistance for 180 seconds for you and surrounding party members.\nThis skill's effect improves if a partner in your party is within your screen.\nConsumes 1 Throat Lozenge.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0 seconds",
      "cooldown": "10 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "171"
            },
            {
              "level": 2,
              "value": "182"
            },
            {
              "level": 3,
              "value": "193"
            },
            {
              "level": 4,
              "value": "204"
            },
            {
              "level": 5,
              "value": "215"
            }
          ]
        }
      ],
      "spCost": "160 + (Skill Level x 11)",
      "duration": "180 seconds",
      "areaOfEffect": "15 x 15 ~ 23 x 23",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5361.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5361",
      "tree": {
        "idx": 18,
        "row": 2,
        "col": 4,
        "columns": 7,
        "requirements": [
          {
            "id": 5360,
            "level": 1,
            "name": "Miner Rhapsody",
            "visible": true
          }
        ]
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
            "value": "160 + (Skill Level x 11)"
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
            "value": "10 seconds"
          },
          {
            "label": "Target",
            "value": "You and party members"
          },
          {
            "label": "Area of Effect",
            "value": "15 x 15 ~ 23 x 23"
          },
          {
            "label": "Duration",
            "value": "180 seconds"
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
                  "sp-cost": "171"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "182"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "193"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "204"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "215"
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
      "id": 5364,
      "imageFile": "5364.png",
      "name": "Prontera March",
      "maxLevel": 5,
      "prerequisiteText": "Miner Rhapsody Lv. 1",
      "group": "Active",
      "type": "Buff",
      "target": "You and party members",
      "recoversAp": "10",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Prontera_March",
      "description": "An Instrument/Whip skill.\nIncrease P.ATK and MSPD for 180 seconds for you and surrounding party members.\nThis skill's effect improves if a partner in your party is within your screen.\nConsumes 1 Throat Lozenge.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0 seconds",
      "cooldown": "10 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "140"
            },
            {
              "level": 2,
              "value": "150"
            },
            {
              "level": 3,
              "value": "160"
            },
            {
              "level": 4,
              "value": "170"
            },
            {
              "level": 5,
              "value": "180"
            }
          ]
        }
      ],
      "spCost": "130 + (Skill Level x 10)",
      "duration": "180 seconds",
      "areaOfEffect": "15 x 15 ~ 23 x 23",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5364.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5364",
      "tree": {
        "idx": 19,
        "row": 2,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 5360,
            "level": 1,
            "name": "Miner Rhapsody",
            "visible": true
          }
        ]
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
            "value": "130 + (Skill Level x 10)"
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
            "value": "10 seconds"
          },
          {
            "label": "Target",
            "value": "You and party members"
          },
          {
            "label": "Area of Effect",
            "value": "15 x 15 ~ 23 x 23"
          },
          {
            "label": "Duration",
            "value": "180 seconds"
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
                  "sp-cost": "140"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "150"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "160"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "170"
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
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 6521,
      "imageFile": "6521.png",
      "name": "Rhythmical Wave",
      "maxLevel": 5,
      "prerequisiteText": "Metallic Fury 3",
      "group": "Active",
      "type": "Magic",
      "target": "Single target",
      "recoversAp": "3",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Musical instrument and whip exclusive skill.\nRadiates sonic magic to the target, dealing magical damage to the target and surrounding enemies around the target.\nIf Mystic Symphony buff is active, the skill will deal more damage.\nDeals additional damage depends on Stage Manner skill level, user's base level and SPL, the skill property depends on the property of equipped arrow.\nConsumes 1 equipped arrows.",
      "levelDetails": [
        {
          "level": 1,
          "text": "3900% Matk / 5100% Matk (Mystic Symphony) / area of effect: 5 x 5 cells."
        },
        {
          "level": 2,
          "text": "7550% Matk / 9750% Matk (Mystic Symphony) / area of effect: 5 x 5 cells."
        },
        {
          "level": 3,
          "text": "11200% Matk / 14400% Matk (Mystic Symphony) / area of effect: 7 x 7 cells."
        },
        {
          "level": 4,
          "text": "14850% Matk / 19050% Matk (Mystic Symphony) / area of effect: 7 x 7 cells."
        },
        {
          "level": 5,
          "text": "18500% Matk / 23700% Matk (Mystic Symphony) / area of effect: 9 x 9 cells."
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "2 seconds",
      "castDelay": "1 second",
      "cooldown": "0.4 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6521.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6521",
      "tree": {
        "idx": 21,
        "row": 3,
        "col": 0,
        "columns": 7,
        "requirements": [
          {
            "id": 5356,
            "level": 3,
            "name": "Metallic Fury",
            "visible": true
          }
        ]
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
            "value": "2 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "1 second"
          },
          {
            "label": "Cooldown",
            "value": "0.4 seconds"
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
      "id": 5351,
      "imageFile": "5351.png",
      "name": "Mystic Symphony",
      "maxLevel": 1,
      "prerequisiteText": "Metallic Fury Lv. 1 and Rose Blossom Lv. 5",
      "group": "Active (AP)",
      "type": "Buff",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "125",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Mystic_Symphony",
      "description": "An Instrument, Bow, and Whip skill.\nCast a buff that increases your Sound Blend, Rhythm Shooting, and Rose Blossom damage by 100% for 150 seconds.\nThis skill also increases your Physical/Magic damage on Fish and Demi-Human enemies for its duration.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Increase Sound Blend/Rhythm Shooting/Rose Blossom damage"
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
              "value": "250"
            }
          ]
        }
      ],
      "spCost": "250",
      "duration": "150 seconds",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5351.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5351",
      "tree": {
        "idx": 22,
        "row": 3,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 5353,
            "level": 5,
            "name": "Rose Blossom",
            "visible": true
          },
          {
            "id": 5356,
            "level": 1,
            "name": "Metallic Fury",
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
            "value": "1"
          },
          {
            "label": "SP Cost",
            "value": "250"
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
            "value": "150 seconds"
          },
          {
            "label": "AP Consumed",
            "value": "125"
          }
        ],
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
                  "effect": "Increase Sound Blend / Rhythm Shooting / Rose Blossom damage",
                  "sp-cost": "250"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Mystic Symphony",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/troubadour/rebalance_1.md",
          "section": "12.5",
          "notes": [
            "Increases damage bonus of Sound Blend, Rhythm Shooting and Rose blossom from 40% to 100%.",
            "Reduces cooldown from 120 seconds to 60 seconds.",
            "Increases duration from 60 seconds to 150 seconds.",
            "Increases AP consumption from 100 to 125."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "40% (bonus of Sound Blend, Rhythm Shooting and Rose blossom)",
              "after": "100% (bonus of Sound Blend, Rhythm Shooting and Rose blossom)",
              "scope": "",
              "source": "Increases damage bonus of Sound Blend, Rhythm Shooting and Rose blossom from 40% to 100%."
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
            },
            {
              "label": "AP Consumed",
              "before": "100",
              "after": "125",
              "scope": "",
              "source": "Increases AP consumption from 100 to 125."
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
      "id": 5359,
      "imageFile": "5359.png",
      "name": "Loki Capriccio",
      "maxLevel": 5,
      "prerequisiteText": "Jawaii Serenade Lv. 1",
      "group": "Active",
      "type": "Debuff",
      "target": "Enemy players within range",
      "recoversAp": "20",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Loki_Capriccio",
      "description": "An Instrument/Whip skill.\nCreate a chance of Misfortune and Confusion on enemy players within range.\nThis skill's effect improves if a partner in your party is within your screen.\nFor PvP only.\nConsumes 1 Throat Lozenge.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0 seconds",
      "cooldown": "10 seconds",
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
              "value": "160"
            },
            {
              "level": 3,
              "value": "200"
            },
            {
              "level": 4,
              "value": "240"
            },
            {
              "level": 5,
              "value": "280"
            }
          ]
        }
      ],
      "spCost": "80 + (Skill Level x 40)",
      "duration": "30 seconds",
      "areaOfEffect": "15 x 15 ~ 23 x 23",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5359.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5359",
      "tree": {
        "idx": 24,
        "row": 3,
        "col": 3,
        "columns": 7,
        "requirements": [
          {
            "id": 5362,
            "level": 1,
            "name": "Jawaii Serenade",
            "visible": true
          }
        ]
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
            "value": "80 + (Skill Level x 40)"
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
            "value": "10 seconds"
          },
          {
            "label": "Target",
            "value": "Enemy players within range"
          },
          {
            "label": "Area of Effect",
            "value": "15 x 15 ~ 23 x 23"
          },
          {
            "label": "Duration",
            "value": "30 seconds"
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
                  "sp-cost": "160"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "200"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "240"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "280"
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
      "id": 5363,
      "imageFile": "5363.png",
      "name": "Nifflheim Requiem",
      "maxLevel": 5,
      "prerequisiteText": "Musical Interlude Lv. 1 and Prontera March Lv. 1",
      "group": "Active",
      "type": "Debuff",
      "target": "Enemy players within range",
      "recoversAp": "20",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Nifflheim_Requiem",
      "description": "An Instrument/Whip skill.\nCreate a chance of Depression and Curse on enemy players within range.\nThis skill's effect improves if a partner in your party is within your screen.\nFor PvP only.\nConsumes 1 Throat Lozenge.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0 seconds",
      "cooldown": "10 seconds",
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
              "value": "160"
            },
            {
              "level": 3,
              "value": "200"
            },
            {
              "level": 4,
              "value": "240"
            },
            {
              "level": 5,
              "value": "280"
            }
          ]
        }
      ],
      "spCost": "80 + (Skill Level x 40)",
      "duration": "30 seconds",
      "areaOfEffect": "15 x 15 ~ 23 x 23",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5363.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5363",
      "tree": {
        "idx": 25,
        "row": 3,
        "col": 4,
        "columns": 7,
        "requirements": [
          {
            "id": 5361,
            "level": 1,
            "name": "Musical Interlude",
            "visible": true
          },
          {
            "id": 5364,
            "level": 1,
            "name": "Prontera March",
            "visible": true
          }
        ]
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
            "value": "80 + (Skill Level x 40)"
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
            "value": "10 seconds"
          },
          {
            "label": "Target",
            "value": "Enemy players within range"
          },
          {
            "label": "Area of Effect",
            "value": "15 x 15 ~ 23 x 23"
          },
          {
            "label": "Duration",
            "value": "30 seconds"
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
                  "sp-cost": "160"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "200"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "240"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "280"
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
      "id": 5352,
      "imageFile": "5352.png",
      "name": "Kvasir Sonata",
      "maxLevel": 1,
      "prerequisiteText": "Loki Capriccio Lv. 1 and Nifflheim Requiem Lv. 1",
      "group": "Active (AP)",
      "type": "Buff",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "100",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Kvasir_Sonata",
      "description": "An Instrument, Bow, and Whip skill.\nYou can use any Ensemble skills by yourself for 60 seconds.\nRequires a party.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "2 seconds",
      "castDelay": "0.15 seconds",
      "cooldown": "120 seconds",
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
      "spCost": "300",
      "duration": "60 seconds",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5352.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5352",
      "tree": {
        "idx": 31,
        "row": 4,
        "col": 3,
        "columns": 7,
        "requirements": [
          {
            "id": 5359,
            "level": 1,
            "name": "Loki Capriccio",
            "visible": true
          },
          {
            "id": 5363,
            "level": 1,
            "name": "Nifflheim Requiem",
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
            "value": "1"
          },
          {
            "label": "SP Cost",
            "value": "300"
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
            "value": "120 seconds"
          },
          {
            "label": "Target",
            "value": "Self"
          },
          {
            "label": "Duration",
            "value": "60 seconds"
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
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "sp-cost": "300"
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

export default troubadourData;
