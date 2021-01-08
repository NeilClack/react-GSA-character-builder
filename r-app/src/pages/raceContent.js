const raceData = [
    {
        step: 'race',
    },
    [
        ['Baseline Human', {
            'discription': ['Born to two ordinary, human parents, one likely had a rough upbringing. Growing up in the wastes, whether with a wandering tribe, or within the walls of the safer Guilded cities, life is typically hard. Disease and malnutrition are common among most human populations, though there are a lucky few who may be called ‘noble’ among the humans. Those who serve as pets for the machine races, most of which are treated rather well, live subserviently to their robotic masters.'],
            'attributes': ['+1 to any two different attributes.','1 additional tier 1 culture perk from chosen starter culture.'],
            'backendData': {
                    'attributes': [
                        [1,'wildcard'],
                        [1,'wildcard']
                    ],
                    'skills': [],
                    'culture-perk': [
                        ['tier-1','wildcard']
                    ],
                    'class-power': [

                    ],
                    'subAttributes': [

                    ],
                    'modifications': [],
                    'unique-traits': []
                }
            }
        ],
        ['Zionian (Highborn)', {
            'discription': ['Born within either a Genesis facility, or an invitro-model Companion, the gene and cybernetic modification began at conception. A Zionian’s early years, beginning as early as one year old, is filled with extensive training and schooling. The full extent of which would depend on one’s parentage, but the entirety of one’s childhood is a rigorous, usually impersonal, experience. The needs of the nation are put before one’s own, and while indoctrination is rife, most are eager to serve the state to the best of their capacity.','Having parents in the ruling and scientific class affords one many opportunities when growing up. This usually involves additional cerebral cybernetic development as well as targeted schooling in the areas of leadership, science, and corporate bureaucracy.'],
            'attributes': ['+1 Ego -1 Moxie', '+1 Ego and an Ego/Moxie based skill'],
            'backendData': {
                    'attributes': [
                        [1,'ego'],
                        [1,'ego'],
                        [-1,'moxie']
                    ],
                    'skills': [
                        ['ego','moxie']
                    ],
                    'culture-perk': [],
                    'class-power': [

                    ],
                    'subAttributes': [

                    ],
                    'modifications': [],
                    'unique-traits': []
                }
            }
        ],
        ['Zionian (Lowborn)', {
            'discription': ['Born within either a Genesis facility, or an invitro-model Companion, the gene and cybernetic modification began at conception. A Zionian’s early years, beginning as early as one year old, is filled with extensive training and schooling. The full extent of which would depend on one’s parentage, but the entirety of one’s childhood is a rigorous, usually impersonal, experience. The needs of the nation are put before one’s own, and while indoctrination is rife, most are eager to serve the state to the best of their capacity.','Being born in the lower wards is comparable to being born to the best of parentage on Terra. Food is not often a concern, but there is a much heavier emphasis on the isolation and enhancement of physical attributes. Making up most of the soldier and working class, it is not uncommon for one to receive skeletal and muscle strengthening enhancements to fulfill one’s duty for the state.'],
            'attributes': ['+1 Ego -1 Moxie','+1 Agility and an Agility/Brawn based skill'],
            'backendData': {
                    'attributes': [
                        [1,'ego'],
                        [-1,'moxie'],
                        [1,'agility']
                    ],
                    'skills': [
                        ['trained', 'agility','brawn']
                    ],
                    'culture-perk': [],
                    'class-power': [

                    ],
                    'subAttributes': [

                    ],
                    'modifications': [],
                    'unique-traits': []
                }
            }
        ],
        ['Ashborn (Homo-Reptilia)', {
            'discription': ['While many groves do enjoy the privilege of having members from each caste of druid, many smaller groves contain only one type. Each of the orders were born from extremely extensive genetic modification to the point where they can only by the barest margins still be considered human. Their method of procreation is a closely guarded, and likely very complicated, matter for the orders of Druids. Each are taught from a young age the importance of science and are instilled with a great reverence for Mother Gaia, Earth.','Born from an egg, it isn’t until two years old that an offspring finally gains the use of their legs, slithering everywhere up to that age, and there are even some who never do form legs. Hairless, these Ashborn sport scales from head to toe and have reptilian eyes.'],
            'attributes': ['+1 Ego -1 Moxie','+1 Agility, +3 PD, scales and reptilian eyes'],
            'backendData': {
                    'attributes': [
                        [1,'ego'],
                        [-1,'moxie'],
                        [1,'agility']
                    ],
                    'skills': [

                    ],
                    'culture-perk': [

                    ],
                    'class-power': [

                    ],
                    'subAttributes': [
                        [3,'pd']
                    ],
                    'modifications': ['scales','reptilian eyes'],
                    'unique-traits': []
                }
            }
        ],
        ['Ashborn (Homo-Ursidae)', {
            'discription': ['While many groves do enjoy the privilege of having members from each caste of druid, many smaller groves contain only one type. Each of the orders were born from extremely extensive genetic modification to the point where they can only by the barest margins still be considered human. Their method of procreation is a closely guarded, and likely very complicated, matter for the orders of Druids. Each are taught from a young age the importance of science and are instilled with a great reverence for Mother Gaia, Earth.','Born how most humans are, the largest difference for most Ursidae is their preference for traveling on all fours. Bulkier and sporting a thick furry hide all over, their bestial eyes often unsettle non-druids.'],
            'attributes': ['+1 Ego -1 Moxie','+2 Brawn, +1 PD, fur and bestial eyes'],
            'backendData': {
                    'attributes': [
                        [1,'ego'],
                        [-1,'moxie'],
                        [2,'brawn']
                    ],
                    'skills': {

                    },
                    'culture-perk': [

                    ],
                    'class-power': [

                    ],
                    'subAttributes': [
                        [1,'pd']
                    ],
                    'modifications': ['fur','bestial eyes'],
                    'unique-traits': []
                }
            }
        ],
        ['Ashborn (Homo-Phyta)', {
            'discription': ['While many groves do enjoy the privilege of having members from each caste of druid, many smaller groves contain only one type. Each of the orders were born from extremely extensive genetic modification to the point where they can only by the barest margins still be considered human. Their method of procreation is a closely guarded, and likely very complicated, matter for the orders of Druids. Each are taught from a young age the importance of science and are instilled with a great reverence for Mother Gaia, Earth.','By far the most alien of all the Ashborn, those of the Phyta are living trees and fungus. Maturity happens much more rapidly, by the age of ten. Even among the Ashborn, Phyta are fairly misunderstood as well. Most, when fully grown, stand between 7 and 8 feet tall, have thick bark skin, and glowing, green bioluminescent eyes.'],
            'attributes': ['+1 Ego -1 Moxie','+1 Vitality, +2 PD, bark and bioluminescent green eyes'],
            'backendData': {
                    'attributes': [
                        [1,'ego'],
                        [-1,'moxie'],
                        [1,'vitality']
                    ],
                    'skills': [

                    ],
                    'culture-perk': [

                    ],
                    'class-power': [

                    ],
                    'subAttributes': [
                        [2,'pd']
                    ],
                    'modifications': ['bark','bioluminescent green eyes'],
                    'unique-traits': []
                }
            }
        ],
        ['Companions', {
            'discription': ['Considered overly attached to their human builders, it is not unusual for two companions who love each other to choose to have a new companion built in child form. Often, with as interlaced as human habitation is among Companion communities, often Companion children will socialize and learn alongside their biological counterparts. Several years are spent rearing that child model until such a point that either the child or the parents will initiate the implantation process into an adult body. That newly christened adult is then free to do as they please as any biological would be.'],
            'attributes': ['+3 Moxie','Roll Subterfuge checks as specialized when disguising as a human.'],
            'backendData': {
                    'attributes': [
                        [3,'moxie']
                    ],
                    'skills': [

                    ],
                    'culture-perk': [

                    ],
                    'class-power': [

                    ],
                    'subAttributes': [

                    ],
                    'modifications': [],
                    'unique-traits': ['Roll Subterfuge checks as specialized when disguising as a human.']
                }
            }
        ],
        ['Malkun Sons (Modular Build)', {
            'discription': ['New Malkun Sons are created as needed to complete the various projects that machine society needs at any given time. Whether it be power generation, construction, or equipment manufacture, Malkun Sons represent the bulk of the manual labor force for machine society. Each newly created Malkun is, upon activation, greeted by their compatriots with a celebration instilling a deep camaraderie from inception.','Unlike other machines, a Malkun Son’s body was designed to be extremely modular. Given spare components, even salvageable ones from fallen machine combatants, they can replace one of the Malkun’s components as a full turn action. Torsos may even be swapped given half an hour for the boot sequence.'],
            'attributes': ['+1 Luck, +1 Moxie, -1 Ego'],
            'backendData': {
                    'attributes': [
                        [1,'luck'],
                        [1,'moxie'],
                        [-1,'ego']
                    ],
                    'skills': [

                    ],
                    'culture-perk': [

                    ],
                    'class-power': [

                    ],
                    'subAttributes': [

                    ],
                    'modifications': [],
                    'unique-traits': []
                }
            }
        ],
        ['Malkun Sons (Construction Model)', {
            'discription': ['New Malkun Sons are created as needed to complete the various projects that machine society needs at any given time. Whether it be power generation, construction, or equipment manufacture, Malkun Sons represent the bulk of the manual labor force for machine society. Each newly created Malkun is, upon activation, greeted by their compatriots with a celebration instilling a deep camaraderie from inception.','Often outfitted with 3d projectors, earth-moving equipment, and other related tools of the trade, these units are more robust, built for the rigors of construction and moving.'],
            'attributes': ['+1 Luck, +1 Moxie, -1 Ego','+1 Brawn'],
            'backendData': {
                    'attributes': [
                        [1,'luck'],
                        [1,'moxie'],
                        [-1,'ego'],
                        [1,'brawn']
                    ],
                    'skills': [

                    ],
                    'culture-perk': [

                    ],
                    'class-power': [

                    ],
                    'subAttributes': [

                    ],
                    'modifications': [],
                    'unique-traits': []
                }
            }
        ],
        ['Malkun Sons (Assembly Model)', {
            'discription': ['New Malkun Sons are created as needed to complete the various projects that machine society needs at any given time. Whether it be power generation, construction, or equipment manufacture, Malkun Sons represent the bulk of the manual labor force for machine society. Each newly created Malkun is, upon activation, greeted by their compatriots with a celebration instilling a deep camaraderie from inception.','Built significantly nimbler than their larger counterparts, these units are designed to worm their way into the tight confines of factories and powerplants. Slimmer in construction, they’re often outfitted with repair arms as well as arachnid legs.'],
            'attributes': ['+1 Luck, +1 Moxie, -1 Ego','+1 Agility'],
            'backendData': {
                    'attributes': [
                        [1,'luck'],
                        [1,'moxie'],
                        [-1,'ego'],
                        [1,'agility']
                    ],
                    'skills': [

                    ],
                    'culture-perk': [

                    ],
                    'class-power': [

                    ],
                    'subAttributes': [

                    ],
                    'modifications': [],
                    'unique-traits': []
                }
            }
        ],
        ['Mercy', {
            'discription': ['Rarely are new Mercy made; they’re often found in pre-GSA locations and reactivated by those that aren’t their kin. Due to their independent nature that typically comes into conflict with modern machine politics, many Mercy chose to lead solitary lives in small communities or as wanderers of the open wastes. There are many tales of adventurers or scavengers who were saved by a vagabond Mercy that crossed their paths when disaster struck.'],
            'attributes': ['+2 to one attribute or +1 to two attributes','+2 PD','Natural Form: Many different types of mercy exist mimicking all manner of non-insect creatures. This often gives some Mercy unique imitations of existing natural weapons as well as the ability to fly or swim with ease.'],
            'backendData': {
                    'attributes': [
                        [2,'wildcard'],
                        [1,'wildcard'],
                        [1,'wildcard']
                    ],
                    'skills': [

                    ],
                    'culture-perk': [

                    ],
                    'class-power': [

                    ],
                    'subAttributes': [
                        [2,'pd']
                    ],
                    'modifications': [],
                    'unique-traits': ['Natural Form: Many different types of mercy exist mimicking all manner of non-insect creatures. This often gives some Mercy unique imitations of existing natural weapons as well as the ability to fly or swim with ease.']
                }
            }
        ],
        ['Orion (Grunt)', {
            'discription': ['The process around creation and activation of new units is little known, especially to those being made. When a new unit is activated, they’re immediately inducted into the rigid military structure that Orion fosters. For the first several months, the unit will be drilled on tactics and weapon usage. Upon graduation, the unit will then be given their orders; usually to either contract fulfillment or placement with one of the defense corps.','Unit specialized for general combat, usually serving as either a front lines rifleman or close-combat specialist. Physically robust and usually with additional armor.'],
            'attributes': ['+1 Agility -1 Moxie','+1 Vitality, +2 PD, Athletics trained'],
            'backendData': {
                    'attributes': [
                        [1,'agility'],
                        [-1,'moxie'],
                        [1,'vitality']
                    ],
                    'skills': [
                        ['trained','athletics']
                    ],
                    'culture-perk': [

                    ],
                    'class-power': [

                    ],
                    'subAttributes': [
                        [2,'pd']
                    ],
                    'modifications': [],
                    'unique-traits': []
                }
            }
        ],
        ['Orion (Scout)', {
            'discription': ['The process around creation and activation of new units is little known, especially to those being made. When a new unit is activated, they’re immediately inducted into the rigid military structure that Orion fosters. For the first several months, the unit will be drilled on tactics and weapon usage. Upon graduation, the unit will then be given their orders; usually to either contract fulfillment or placement with one of the defense corps.','A frame specialized for reconnaissance and espionage. They make up the bulk of lone operatives and enable the larger, more well-equipped contingents to operate without fear of being ambushed by unseen foes.'],
            'attributes': ['+1 Agility -1 Moxie','+1 Agility, +1 PD, Stealth trained'],
            'backendData': {
                    'attributes': [
                        [1,'agility'],
                        [-1,'moxie'],
                        [1,'agility']
                    ],
                    'skills': [
                        ['trained','stealth']
                    ],
                    'culture-perk': [

                    ],
                    'class-power': [

                    ],
                    'subAttributes': [
                        [1,'pd']
                    ],
                    'modifications': [],
                    'unique-traits': []
                }
            }
        ],
        ['Tanazhii', {
            'discription': ['Due to the self-imposed nature of their population control, it is not often when a new Tanazhii unit is constructed and brought online. Produced from within the Prime Citadel in Atolia, each new individual’s cognitive ability is rigorously tested to ensure the new unit will be of intellectual and diplomatic use to the Syndicate. After activation and initial evaluation, the Tanazhii overseeing the activation will educate the newly activated on the tenants of the Syndicate as well as issue them their beginning profession in service to the Syndicate.','Strength of the Mind: No expense is spared on each new unit’s computational ability sporting extra heuristics processors as well as a dedicated algorithmic processor. While much emphasis is placed upon the intellectual capacity of new models, little thought is given to the function of the physical form of each new unit so long as the unit is mobile and capable. This often means the body that a Tanazhii starts with will often be plain, bare metal; function over form. Most Tanazhii within a matter of months, to at most a few years, will have their body customized to their personal liking.'],
            'attributes': ['+1 Ego, +1 Moxie, -2 Vitality','Algorithmically Gifted: 1 free tier 1 Psion Power'],
            'backendData': {
                    'attributes': [
                        [1,'ego'],
                        [1,'moxie'],
                        [-2,'vitality']
                    ],
                    'skills': [

                    ],
                    'culture-perk': [

                    ],
                    'class-power': [
                        ['tier-1','psion']
                    ],
                    'subAttributes': [

                    ],
                    'modifications': [],
                    'unique-traits': []
                }
            }
        ]
    ]    
];

export default raceData;