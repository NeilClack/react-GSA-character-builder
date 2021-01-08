const classData = [
    {
        step: 'class',
    },
    [
        ['Pathfinder', {
            'requirements': [],
            'backendData': {
                    'classAttributes': [
                        [2,'Tracker','Make a Nature check to pick up on the trail of any target the pathfinder has a physical description of.'],
                        [4,'Echoes','After spending one minute of concentration, the pathfinder becomes aware of the number and general direction of all machines within .5 km.'],
                        [6,'Overwatch','1 Action. Once on the enemy turn, if an enemy moves across your line of sight and is within weapon range, you may make an attack against that enemy immediately.'],
                        [8,'Hide Anywhere','The pathfinder can attempt to hide anywhere regardless of lighting conditions or other factors at no penalty.'],
                        [10,'Vanish','Free Action with 2 Turn Cooldown. The pathfinder can enter concealment with no roll necessary.'],
                        [10,'The Augur','Once per session. The player may prompt the GM to point you down the best route based upon variables stated by the player.']                        
                    ],
                    'subClass': [
                        ['Bush Ranger', [
                                [1,'Quick on the Draw','Free Action. Draw and make an attack action with a handgun.'],
                                [3,'Enforced Butter-Fingers','1 Action with 1 Turn cooldown. Make an attack action against an enemy at disadvantage. If successful, the target drops their weapon, and on a critical, the weapon is non-functional.'],
                                [5,'High Noon','2 Actions with 4 Turn Cooldown. Make six attack actions at -4 to each attack.'],
                                [7,'Flash Step','1 Action with 3 Turn Cooldown. In the blink of an eye, move up to 5 squares, doesn’t count as normal movement.'],
                                [9,'Desperado','2 Actions with 4 Turn Cooldown. Make a single attack action against every target within range, ammo permitting. If the pathfinder also has Flash Step, can step prior to using Desperado as a Free Action.']
                            ]
                        ],
                        ['Deadwood',[
                                [1,'Headshot','1 Action and 2 Turn Cooldown. Make an attack action with a rifle at advantage against one target in range and deal one additional die of damage on hit.'],
                                [3,'The High Ground','+4 to any attack and +4 to PD if at an elevated position.'],
                                [5,'Hug the Wall','Treat all low cover as high cover.'],
                                [7,'Penetrating Shot','1 Action and 3 Turn Cooldown. Make one attack action against a target in range that ignores cover and damage reduction.'],
                                [9,'Bodies Hit the Floor','4 Turn Cooldown. Any attack action that kills a target out of cover is a free action. Once triggered, it applies to every kill for that turn, then the cooldown goes into effect. If the pathfinder has Penetrating Shot, BHtF applies to every kill.']
                            ]
                        ],               
                    ],
                    'wildcards': {
                        '': {
                            'ordered': true,
                            'subClass': '',
                            'description': '',
                            'cards': [
                                
                            ]
                        },
                    },
    
                }
            }
        ],
        ['Psion', {
            'requirements': ['psion'],
            'backendData': {
                    'classAttributes': [
                        [2,'Practiced Equations','Choose one specific power and take 10 on checks with that power when used on objects, gain a +3 on the check otherwise.'],
                        [4,'Infinite Complexity.','Maintain a power turn after turn with one concentration check every turn to maintain. Damage taken by the psion forces an immediate check at disadvantage. Any damaging powers used in this way need not roll to hit after the initial attack action.'],
                        [6,'See the Strings','Gain advantage on any sight-based checks.'],
                        [8,'Prima Dicio','Choose of the three fields of power (Kineticist, Metabolist, and Entropist) as your primary focus. Take 10 on any checks for powers within that field when used on objects, otherwise +3 to the check. If that field corresponds with your chosen level 1 talent, gain a +5 instead of +3 on those checks.'],
                        [10,'Dominum Animum','Manifest two powers as one combining their effects and consuming only one action, or target double the amount of targets a power can affect.']                        
                    ],
                    'subClass': [
                        ['Kineticist', [
                                [1,'Boson Master','Double the mass limits and max velocities for Kineticist psion powers.'],
                                [3,'Light as a Feather','Free yourself from the constraints of gravity by a margin; +2 SPD.'],
                                [5,'Center of Gravity','Free Action and 2 Turn Cooldown. For one turn can orient gravity for self freely and walk on any solid surface. Your orientation returns to normal afterward.'],
                                [7,'Gift of Atlas','Wield any oversized weapon, ranged or close-combat, with no penalty.'],
                                [9,'Newtonian Paradox','Gain a fly speed of ½ your max velocity, or 6 squares, whichever is more.']
                            ]
                        ],
                        ['Metabolist',[
                                [1,'Conductor','Extend all Metabolist powers to 18 squares.'],
                                [3,'Blur','Your movements seem jerky at first glance; +2 PD.'],
                                [5,'Advanced Metabolism','Free Action and 3/Day. Heal one wound die per turn, rolled, for a number of turns equal to your total number of wound dice. You also heal at 3 times normal rate and require 3 times as much sustenance (passive).'],
                                [7,'Neural Disruption','1 Action and 2 Turn Cooldown. Make a melee attack action against a target in range. If successful, they are unable to take an action on their next turn.'],
                                [9,'Overdrive','Full Turn Action and 1/Encounter. For the rest of the encounter, all targets you designate within range gain +2 SPD, +1 Action, and +2 PD and MD.']
                            ]
                        ],
                        ['Entropist', [
                                [1,'Elementist','When using Entropist powers, you may have its damage be fire, cold, electrical, or sonic.'],
                                [3,'Controlled Carnage','Imbue your will into your ranged attacks; +3 damage with ranged weapons.'],
                                [5,'Shaped Chaos','Free Action and 3 Turn Cooldown. Imbue an attack and cause it to burst with a 2 square radius from point of impact, or instead add one die of damage to a successful hit.'],
                                [7,'Entropic Displacement','The first ranged attack every turn against the psion misses. This power is ineffective against lasers and explosives however.'],
                                [9,'Uncertain Location','Free Action and 3 Turn Cooldown. You occupy two locations on the battle grid simultaneously both within a number of squares equal to your Speed. When you are attacked for the first time in the turn in either location, before damage is rolled, you must choose which location you will ultimately end up at. This can negate an attack entirely. If you are attacked in both locations, you must decide which attack to take before damage is rolled. If you are not attacked, you resolve your position at the beginning of your next turn.']
                            ]
                        ]               
                    ],
                    'wildcards': {
                        '': {
                            'ordered': true,
                            'subClass': '',
                            'description': '',
                            'cards': [
                                
                            ]
                        },
                    },
    
                }
            }
        ],
        ['Scavenger', {
            'requirements': [],
            'backendData': {
                    'classAttributes': [
                        [2,'Finders Keepers','Scavengers are naturally adept at finding intact stashes; advantage on scavenge checks and +2 Luck.'],
                        [4,'Nuked Fridge','Unnaturally resilient, any danger that a scavenger can see forces his muscle memory into overdrive. If the scavenger makes his check, he takes no damage, no matter how unlikely.'],
                        [6,'Tinker Master','Not only great at finding old world treasures, scavengers often have inspiration to create new gadgets out of those components (see the Tinker Master perk in the Guilder section of Cultural Perks). If you already have the Tinker Master perk, get one free Tier 3 perk in a culture you are eligible for.'],
                        [8,'Raider of Tombs','No wall, fire or physical, will keep a scavenger from his prize. Any mechanics or computers check made to disable a trap is at advantage. '],
                        [10,'Devil’s Luck','At the peak of their profession, scavengers widely are known to extremely keen eyes to spot an incredibly rare, completely functional piece of technology. Once per session, the player may designate one item found to be in working condition. Also gain +2 Luck. ']                        
                    ],
                    'subClass': [
                        ['Joneser', [
                                [1,'Cyber Punk','Masters of all things digital, Jonesers often must bypass security systems to get at their prize; (Hacking) specialty gained in Computers and +5 to perceive and disable traps.'],
                                [3,'Decoy Grenade','1 Action and 1/Encounter. Distract automated defenses and panzers for 1d4 rounds to a specified target area.'],
                                [5,'Panzer Hijack','1 Action and no Cooldown. Make physical contact with a panzer and make a Computers check. If successful, you control the panzer for 1d4+Ego turns. On its turn, you designate one target and it will move and attack that target if able.'],
                                [7,'Hacking Drone','Scavenger found an old quadcopter and modified it heavily. Allows for remote hacking using your own check within line of sight and has the following physical stats: PD-10, Speed-14 (fly), WP-20. If the drone becomes destroyed, it can be repaired with 100 Trans worth of materials.'],
                                [9,'Gun Drone','If already in possession of a hacking drone, that drone gains a weapon slot and gains +2 PD and 10 WP. Otherwise, gain a tracked drone that has a weapon slot with the following stats: PD-12, Speed-6, WP-30. If the drone becomes destroyed, it can be repaired with 100 Trans worth of materials. (weapon and ammo must be supplied) ']
                            ]
                        ],
                        ['Stalker',[
                                [1,'Ambush','Stalkers are second-to-none when it comes to slinking around and getting the drop on their opponent; (Stalking) specialty in stealth. If your target is unaware of your movements, when you strike successfully, add 1d8 per two levels in scavenger to the attack’s damage.'],
                                [3,'Blue-Screen Protocol','Reaction and 3 Turn Cooldown. Triggers on any attack made against a machine at advantage. The machine must succeed on an ego check equal to 10 plus your scavenger level or be stunned for 1d4 rounds.'],
                                [5,'Stealth Emitters','Free Action and 5 turn cooldown. Can be activated to immediately enter stealth as if you had rolled a natural 20.'],
                                [7,'Toxic Nanites','Free action and 2 Turn Cooldown. Can be applied to any attack made at advantage. Gain the ability to make nanite toxins using a successful Medicine check. Standard toxin has a vitality save of 10 plus your scavenger level and deals 1d4 per level in scavenger if successful.'],
                                [9,'Visage of Gyges','If you also have Stealth Emitters, you may take 20 on all stealth rolls and all rolls made to spot you are at disadvantage. Otherwise, you gain advantage on all stealth checks.']
                            ]
                        ],               
                    ],
                    'wildcards': {
                        '': {
                            'ordered': true,
                            'subClass': '',
                            'description': '',
                            'cards': [
                                
                            ]
                        },
                    },
    
                }
            }
        ],
        ['Soldier', {
            'requirements': [],
            'backendData': {
                    'classAttributes': [
                        [2,'Rapid Assault','+1 Attack Action as a Free Action.'],
                        [4,'Speed Boost','+2 Speed'],
                        [6,'Back in the Action','Reload your non-HMG/LMG weapon as a free action.'],
                        [8,'Lightning Reflexes','The first attack against you fails to connect.'],
                        [10,'True Grit','Once per session, if you would be reduced to 0 WP, you are instead put back to full WP and get one immediate free action.']                        
                    ],
                    'subClass': [
                        ['Rifleman', [
                                [1,'Suppression','1 Action and No Cooldown. Choose one target and expend 50 rounds of ammunition, or half of your magazine if your magazine doesn’t contain that much (but must have at least half). That target cannot move and is at disadvantage to take any action until the start of your next turn.'],
                                [3,'Steady Aim','1 Action and No Cooldown. Sacrifice your movement action to get advantage on your next ranged attack.'],
                                [5,'Ratchet Grenade','1 Action and 2/Day. You must have the nano-grenade assembler. Grenade has a blast diameter of 5 squares and does 6d6 shrapnel damage.'],
                                [7,'Marksman','Ignore half cover when making ranged attacks.'],
                                [9,'All You’ve Got','Full Turn Action and 4 Turn Cooldown. You must have over three quarters of your magazine to perform. Make five ranged attacks at disadvantage against one to five targets, and these five attacks are made without the normal multi-attack penalties.']
                            ]
                        ],
                        ['CQCS',[
                                [1,'Bull Rush','1 Action and No Cooldown. If you move at least 2 squares in a straight line at an opponent, you can do one of three things; make an attack action against one target at advantage, make an attack action and add 10 to its damage (if you hit), or shove your opponent 2 squares (if you make your opposed brawn check).'],
                                [3,'Tough as Nails','Reaction and can be used a number of times equal to your Soldier level per day. If an attack hits you, you may roll 1d10 and subtract that from the damage you would take.'],
                                [5,'Crash Grenade','1 Action and 2/Day. You must have the nano-grenade assembler. Grenade has a blast diameter of 5 squares and stuns all opponents there for 1d4 turns.'],
                                [7,'Sweep','Full Action and 2 Turn Cooldown. Make one melee attack action against all targets within melee range.'],
                                [9,'Envy of Gilgamesh','1 Action and 6 Turn Cooldown. Make one melee attack action against a single target. If that target has 5 Wound Dice or fewer, the target is dead. Otherwise the target takes normal weapon damage and 5d10 additional damage that cannot be mitigated.']
                            ]
                        ],               
                    ],
                    'wildcards': {
                        '': {
                            'ordered': true,
                            'subClass': '',
                            'description': '',
                            'cards': [
                                
                            ]
                        },
                    },
    
                }
            }
        ],
        ['Support', {
            'requirements': [],
            'backendData': {
                    'classAttributes': [
                        [2,'Speed Boost','+2 speed'],
                        [2,'Wildcard', 'You get to choose a specialized skill'],
                        [4,'Target Expansion','Your target painter/scrambler now affects all eligible targets within a 5-square radius of your intended single target.'],
                        [6,'Wildcard', 'You get to choose a specialized skill'],
                        [8,'Grenade Amalgam','You gain the ability to add stims and nano-toxins to your grenade, to include Combat Stim and Paranoia Agent. Both Combat Stim and Paranoia Agent double in duration when used normally.'],
                        [10,'Wasteland’s Last Hope','Full Turn Action and 1/Session. A bright pink light envelops the support, their eyes brimming with the glow of imbued energy. All friendlies within line of sight, dead or alive, are returned to full WP and consciousness. Psions will recognize it is psionic in nature, but the support is unsure of how it works. The knowledge of when and how to use it was simply granted to them in a dream.']                        
                    ],
                    'subClass': [
                        ['Healer', [
                                [1,'Healing Spray','1 Action and No Cooldown. You have a starting pool of 100 WP that self-replenishes every 24-hour cycle. This pool may be increased with purchased or found upgrades in the equipment section. Starting distance one can heal is 2 squares distance.'],
                                [3,'Target Painter','1 Action and 3 Turn Cooldown. Make a ranged attack action against one target within line of sight. If successful, all allies get advantage on any attacks against that target. Can be maintained if no other actions are taken.'],
                                [5,'Healing Grenade','1 Action and Twice per Day. You must have the nano-grenade assembler. Grenade has a blast diameter of 5 squares and heals ALL in radius for 8d6.'],
                                [7,'Combat Stim','1 Action and Thrice per Day. You must have a nanite applicator. For 1d4+Ego turns, the injected subject gains 1 extra action, 2 extra PD and MD, and can move 2 extra squares in a movement action. Cultivated from your character’s unique anatomy, the process of replication cannot be simply learned.'],
                                [9,'Revival Protocol','1 Action and Once per Day. You must have a nanite applicator. A specialized nanite compound developed by a Zionian project dubbed “Lazarus”. The compound is little understood, and the methods of replication are a closely guarded secret, but it can bring life back to an individual, organic or mechanical, if it is applied within ten minutes of their death. They return to life with one third of their full wound points. Roll a d100, on a roll of 25 or less, the Vitality of the revived individual is permanently reduced by one.']
                            ]
                        ],
                        ['Deadwood',[
                                [1,'Shield','1 Action and No Cooldown. You can deploy a two-square wide cover that will provide low cover for anyone taking cover behind it. The shield can be either physical, energy, or psionic, and each has its’ own traits as shown below. The shield is also considered trivial to repair, but only retains its properties only as long the support keeps it as their own shield. - Physical – Provides those behind a DR 5 on top of any such bonuses user has already. - Energy – Provides those behind a SR 5 on top of any such bonuses user already has. - Psion – Must be able to use psion abilities. Provides an additional +2 PD and allows friendlies to the ability to attack out adding 1d6 damage to any attacks passing through it.'],
                                [3,'Target Scrambler','1 Action and 3 Turn Cooldown. Make a ranged attack action against one target within line of sight. If successful, the target is at disadvantage on any attacks that it makes. Can be maintained if no other actions are taken.'],
                                [5,'Adhesive Grenade','1 Action and 2/Day. You must have the nano-grenade assembler. Grenade has a blast diameter of 8 squares and reduces all movement within the affected area to 2 squares. Lasts for 1d4+Ego rounds.'],
                                [7,'Paranoia Agent','1 Action and 3/Day. You must have a nanite applicator. Must succeed on a Medicine roll versus the target’s MD. For 1d4+Ego turns, the injected subject experiences intense hallucinations and must roll a d100 on each turn its affected. 100-51, the target must use its full turn to move away from combat. 50-25, target cowers in place. 24-1, subject attacks a random target. Cultivated from your character’s unique anatomy, the process of replication cannot be simply learned.'],
                                [9,'Stun Projector','1 Action and 1/Encounter. You must succeed on a ranged attack against a target inside of 5 squares. If successful, roll a d20 with no modifiers versus the target’s MD. If it meets or exceeds, the target is knocked out. If it is under, the target is stunned for 1d4+ego rounds.']
                            ]
                        ],               
                    ],
                    'wildcards': {
                        'healingSpray': {
                            'ordered': true,
                            'subClass': 'Healer',
                            'description': '',
                            'cards': [
                                [1,'Healing spray distance increases from 2 squares to 3.'],
                                [2,'When you use your spray, you can choose to increase the distance to five squares or heal 2 WP per 1 WP expended in your normal range. Regardless, you heal yourself for the amount that you heal your target for.']
                            ]

                        },
                        'shield': {
                            'ordered': true,
                            'subClass': 'Deadwood',
                            'description': '',
                            'cards': [
                                [1,'When deploying your shield, you can extend it by one square OR deploy it as high cover.']
                                [2,'On shield deploy, you can have the shield project a 3-square radius impenetrable bubble shield, can only remain active for 3 rounds per day.']
                            ]
                        }
                    },

                }
            }
        ],
        ['Tactician', {
            'requirements': [],
            'backendData': {
                    'classAttributes': [
                        [1,'Command Range','The Tactician has a command range in combat of (1 + Moxie + Levels in Tactician) squares.'],
                        [2,'Get it done','Free Action and 2/Session. You can add your Moxie to any skill check made by you or your allies.'],
                        [4,'Silver Tongue','You can treat all persuasion and subterfuge checks as trained. If they are already trained, then you gain a specialty of your choice.'],
                        [6,'Situational Awareness','You can use your Moxie stat in place of Ego when making Awareness checks. Commanding Presence. Double your command range.'],
                        [8,'Commanding Presence','Double your command range.'],
                        [10,'Into the Gates of Hell','Reaction and 1/Session. You have been described as a poet of warfare as you walk the fields of battle. You and all friendlies within command range gain immunity to the next attack against them as well as causing the next attack they make to be a guaranteed critical (if applicable).']                        
                    ],
                    'subClass': [
                        ['Commander', [
                                [1,'Combat Multiplier','Your experience with tactics allows you to pinpoint advantages to give your team an edge in a fight. You and any friendlies within command range gain +1 movement and +2 PD.'],
                                [3,'Hit the Dirt','Reaction and 2 Turn Cooldown. You or a friendly within command range gains +10 PD against the next attack until the end of the turn. They also gain a free movement action if the attack misses.'],
                                [5,'Leadership','You inspire greatness in those around you. You and any friendly within command range of you gets +5 MD and you alone have advantage on all Moxie based skill checks.'],
                                [7,'Flanking Maneuver','1 Action and 3 Turn Cooldown. All friendlies within command range gain +5 SPD on their next turn.'],
                                [9,'Moment of Glory','1 Action and 3 Turn Cooldown. You and all friendlies within command range gain an extra action and +10 PD and MD until the end of their next turn. If you have taken Combat Multiplier, then Combat Multiplier’s bonuses are doubled permanently, and Moment of Glory reduces the cooldown of all allies’ skills by one turn (Moment of Glory is not affected).']
                            ]
                        ],
                        ['Warlord',[
                                [1,'Ruthless Command','You know the best time to knock the breath out of someone is when they are trying to catch it. You and any friendlies within command range of you gain +2 damage and advantage on attacks against any hostile that has already acted this turn.'],
                                [3,'War Cry','1 Action and 2 Turn Cooldown. You roar loudly, causing your enemies to hesitate. All hostiles within command range of you gain disadvantage on their next attack.'],
                                [5,'Infamy','Enemies lose one action at the beginning of the first combat turn as they hesitate to engage you directly or run away.'],
                                [7,'Focus Fire','1 Action and 3 Turn Cooldown. You designate a target. All friendlies within command range that have not taken an action this turn gain a free attack action against the target you designated.'],
                                [9,'Warlords Glare','1 Action and 3 Turn Cooldown. Make a persuasion check and designate a hostile within command range. If you succeed on the check, target hostile becomes frightened for two turns (unable to take any action other than run away). If you have taken Ruthless Command and succeed on the check by 5 or more, target temporarily becomes a friendly for the encounter and the bonuses of Ruthless Command are doubled permanently and can now affect all hostiles even if they have not taken an action.']
                            ]
                        ],               
                    ],
                    'wildcards': {
                        '': {
                            'ordered': true,
                            'subClass': '',
                            'description': '',
                            'cards': [
                                
                            ]
                        },
                    },
    
                }
            }
        ],
        ['Wasteland Warrior', {
            'requirements': [],
            'backendData': {
                    'classAttributes': [
                        [2,'Rage','Free Action and 10 Turn Cooldown. Advantage on all Brawn based checks and gain double Brawn on all melee attacks to hit and damage. Additionally, it adds 2 to your PD and MD. Rage lasts for a number of turns equal to your Vitality.'],
                        [4,'Heightened Senses','Advantage on all Agility based saves from sources you can see.'],
                        [6,'The Duke’s Decree','Your Vitality counts for double when calculating your PD if you are not wearing armor.'],
                        [8,'Unending Fury','Effects of rage only end when you fall unconscious or when you choose.'],
                        [10,'Blessing of Odin','Brawn, Vitality, and Agility are all increased by 2.']                   
                    ],
                    'subClass': [
                        ['Booster', [
                                [1,'Gotta Cook','Gain ability to manufacture chems and glitches. All chems, or glitches, you consume gain double duration.'],
                                [3,'Speed Demon','While in rage, gain an additional +3 SPD and a bonus attack action.'],
                                [5,'Howl of Insanity',' 1 Action and 4 Turn Cooldown. Emit an unnerving howl at all targets within earshot. Make a persuasion check, adding your ego in addition to your Moxie. All who fail their check are completely unnerved, losing one action on their next turn unless they flee'],
                                [7,'Angel’s Shroud','Reaction and 1/Encounter. Become immune to all debilitating effects for a number of turns equal to your Vitality.'],
                                [9,'Bullet Time','Passive. Make an Agility save against the first attack against you in a turn whose DC is the attack roll. If you have Speed Demon, the first three attacks instead.']
                            ]
                        ],
                        ['Totemic Berserker',[
                                [1,'Blessings of War','1 Action and No Cooldown. Inflict 1d6 damage on yourself to coat your weapon in your blood. For the duration of the encounter, the anointed weapon gains +4 to attack and damage.'],
                                [3,'Juggernaut','While in rage, gain resistance to all damage.'],
                                [5,'Gods Demand Blood','Free Action and 4 Turn Cooldown. Recite an incantation and designate one target in line of sight. That target must attack you alone or suffer 1d8 damage for each attack not directed at you. This effect lasts for 2 turns.'],
                                [7,'Wings of the Gods','1 Action and 1 Turn Cooldown. Move your movement in any direction not blocked by cover. You fall at the end of your movement if your movement doesn’t end on solid ground.'],
                                [9,'Unstoppable Force','1 Action and 2/Day. Move literally through any material 1 square or less in width and suffer damage equal to its MR value. If you have Juggernaut, no damage.']
                            ]
                        ],               
                    ],
                    'wildcards': {
                        '': {
                            'ordered': true,
                            'subClass': '',
                            'description': '',
                            'cards': [
                                
                            ]
                        },
                    },
    
                }
            }
        ]
    ]
];

export default classData;