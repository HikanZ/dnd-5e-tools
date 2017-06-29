import { Languages } from "app/data/languages";
import * as Weapons from "app/data/weapons";
import { FeatureType, TimeUnit } from "app/models/features";
import * as RaceModels from "app/models/races";

import { ArmorType } from "../../models/equipment/armor-type";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Hobgoblin: RaceModels.Race = new RaceModels.Race({
    name: "Hobgoblin",
    size: "Medium",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    age: { maturity: 18, max: 80 },
    height: { base: 60, modifier: 12 },
    weight: { base: 150, modifier: 4 },
    nameDefinition: Names.Goblin,
    languages: { known: [Languages.Common, Languages.Goblin] },
    abilityMods: { "CON": +2, "INT": +1 },
    features: [
        {
            name: "Martial Training", type: FeatureType.Passive,
            description: "You are proficient with two martial weapons of your choice and with light armor.",
            weaponProficiencies: [{ proficiencies: Weapons.MartialWeapons, count: 2 }],
            armorProficiencies: [{ proficiencies: [ArmorType.Light] }],
        }, {
            name: "Saving Face", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.ShortRest },
            description: `
                Hobgoblins are careful not to show weakness in front of their allies, for fear of losing status. If you miss
                with an attack roll or fail an ability check or a saving throw, you can gain a bonus to the roll equal to the
                number of allies you can see within 30 feet of you (maximum bonus of +5). Once you use this trait, you can't
                use it again until you finish a short or long rest.
            `
        }
    ],
    reference: { source: "VGM", page: 119 },
    subraces: []
});

RaceList.push

RaceList.push(Hobgoblin);
