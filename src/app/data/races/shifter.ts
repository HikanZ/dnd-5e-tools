import { Languages, Skills } from "app/data";
import * as Characters from "app/models/characters";
import { FeatureType, TimeUnit } from "app/models/features";
import * as RaceModels from "app/models/races";

import { CommonFeatures } from "../common-features";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Shifter: RaceModels.Race = new RaceModels.Race({
    name: "Shifter",
    size: "Medium",
    speed: { walk: 30 },
    age: { maturity: 18, max: 80 },
    height: { base: 56, modifier: 20 },
    weight: { base: 110, modifier: 8 },
    nameDefinition: Names.Shifter,
    senses: { darkvision: 60 },
    languages: { known: [Languages.Common, Languages.Sylvan] },
    abilityMods: { "DEX": +1 },
    features: [],
    reference: {
        source: "UA", page: 2,
        document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=2"
    },
    subraces: [
        {
            name: "Beasthide",
            abilityMods: { "CON": +1 },
            features: [
                {
                    name: "Shifting", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.ShortRest },
                    description: `
                        On your turn, you can shift as a bonus action. Shifting lasts for 1 minute or until you end it on your turn as
                        a bonus action. While shifting, you gain temporary hit points equal to your level + your Constitution bonus
                        (minimum of 1) and you gain a +1 bonus to AC. You must finish a short or long rest before you can shift again.
                    `,
                    reference: {
                        source: "UA", page: 2,
                        document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=2"
                    }
                },
            ],
            reference: {
                source: "UA", page: 2,
                document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=2"
            },
        }, {
            name: "Cliffwalk",
            abilityMods: { "DEX": +1 },
            features: [
                {
                    name: "Shifting", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.ShortRest },
                    description: `
                            On your turn, you can shift as a bonus action. Shifting lasts for 1 minute or until you end it on your turn as
                            a bonus action. While shifting, you gain temporary hit points equal to your level + your Constitution bonus
                            (minimum of 1) and you gain a climb speed of 30 ft. You must finish a short or long rest before you can shift
                            again.
                        `,
                    reference: {
                        source: "UA", page: 2,
                        document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=2"
                    }
                }
            ],
            reference: {
                source: "UA", page: 2,
                document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=2"
            },
        }, {
            name: "Longstride",
            abilityMods: { "DEX": +1 },
            features: [
                {
                    name: "Shifting", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.ShortRest },
                    description: `
                            On your turn, you can shift as a bonus action. Shifting lasts for 1 minute or until you end it on your turn as
                            a bonus action. While shifting, you gain temporary hit points equal to your level + your Constitution bonus
                            (minimum of 1) and you can also use the Dash action as a bonus action.
                        `,
                    reference: {
                        source: "UA", page: 2,
                        document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=2"
                    }
                }
            ],
            reference: {
                source: "UA", page: 2,
                document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=2"
            },
        }, {
            name: "Longtooth",
            abilityMods: { "STR": +1 },
            features: [
                {
                    name: "Shifting", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.ShortRest },
                    description: `
                            On your turn, you can shift as a bonus action. Shifting lasts for 1 minute or until you end it on your turn as
                            a bonus action. While shifting, you gain temporary hit points equal to your level + your Constitution bonus
                            (minimum of 1) and you can make a bite attack as an action. This is a melee weapon attack that uses Strength for
                            its attack roll and damage bonus and deals 1d6 piercing damage. If this attack hits a target that is your size
                            or smaller, the target is also grappled.
                        `,
                    reference: {
                        source: "UA", page: 2,
                        document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=2"
                    },
                }
            ],
            reference: {
                source: "UA", page: 2,
                document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=2"
            },
        }, {
            name: "Razorclaw",
            abilityMods: { "DEX": +1 },
            features: [
                {
                    name: "Shifting", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.ShortRest },
                    description: `
                            On your turn, you can shift as a bonus action. Shifting lasts for 1 minute or until you end it on your turn as
                            a bonus action. While shifting, you gain temporary hit points equal to your level + your Constitution bonus
                            (minimum of 1) and you can make an unarmed strike as a bonus action. You can use your Dexterity for its attack
                            roll and damage bonus, and this attack deals slashing damage
                        `,
                    reference: {
                        source: "UA", page: 2,
                        document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=2"
                    },
                }
            ],
            reference: {
                source: "UA", page: 2,
                document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=2"
            },
        }, {
            name: "Wildhunt",
            abilityMods: { "WIS": +1 },
            features: [
                {
                    name: "Shifting", type: FeatureType.Active,
                    usage: { times: 1, timeUnit: TimeUnit.ShortRest },
                    description: `
                            On your turn, you can shift as a bonus action. Shifting lasts for 1 minute or until you end it on your turn as
                            a bonus action. While shifting, you gain temporary hit points equal to your level + your Constitution bonus
                            (minimum of 1) and you gain advantage on all Wisdom-based checks and saving throws.
                        `,
                    reference: {
                        source: "UA", page: 3,
                        document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=3"
                    },
                }
            ],
            reference: {
                source: "UA", page: 3,
                document: "Eberron", url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=3"
            },
        }
    ]
});

RaceList.push(Shifter);
