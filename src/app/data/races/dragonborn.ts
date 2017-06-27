import { Languages } from "../../data/languages";
import { FeatureType } from "../../models/features/feature-type";
import { TimeUnit } from "../../models/features/time-unit";
import * as RaceModels from "../../models/races";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Dragonborn: RaceModels.Race = {
    name: "Dragonborn",
    size: "Medium",
    speed: { walk: 30 },
    age: { maturity: 15, max: 80 },
    height: { base: 66, modifier: 16 },
    weight: { base: 175, modifier: 12 },
    nameDefinition: Names.Dragonborn,
    languages: { known: [Languages.Common, Languages.Draconic] },
    abilityMods: { "STR": +2, "CHA": +1 },
    features: [
        {
            name: "Draconic Ancestry", type: FeatureType.Passive,
            description: `
                You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table.
                Your breath weapon and damage resistance are determined by lhe dragon type. as shown in the table
            `
        }, {
            name: "Breath Weapon", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.ShortRest },
            description: `
                You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of
                the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw. the
                type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier +
                your proficiency bonus. A creature takes 2d6 damage on a failed save. and half as much damage on a successful one. The
                damage increases to 3d6 at 6th level. 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't
                use it again until you complete a short or long rest.
            `
        }, {
            name: "Damage Resistance", type: FeatureType.Passive,
            description: "Vou have resistance to the damage type associated with your draconic ancestry."
        }
    ],
    reference: {
        source: "PHB",
        page: 32,
        url: "https://www.dndbeyond.com/characters/races/dragonborn"
    },
    subraces: []
};

RaceList[Dragonborn.name] = Dragonborn;
