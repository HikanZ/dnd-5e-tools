import * as Languages from "../../data/languages";
import { Races } from "./races";
import { CommonFeatures } from "../common-features";

import * as RaceModels from "../../models/races";

const Hobgoblin: RaceModels.Race = {
    name: "Hobgoblin",
    size: "Medium",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    languages: { known: [ Languages.Common, Languages.Goblin ] },
    statMods: { constitution: +2, intelligence: +1 },
    features: [
        {
            name: "Martial Training", type: "singleMod",
            description: "You are proficient with two martial weapons of your choice and with light armor."
        }, {
            name: "Saving Face", type: "active",
            usage: { times: 1, timeUnit: "shortRest" },
            description: `
                Hobgoblins are careful not to show weakness in front of their allies, for fear of losing status. If you miss
                with an attack roll or fail an ability check or a saving throw, you can gain a bonus to the roll equal to the
                number of allies you can see within 30 feet of you (maximum bonus of +5). Once you use this trait, you can't
                use it again until you finish a short or long rest.
            `
        }
    ],
    reference: { source: "VGM", page: 119 },
    subraces: null
};

Races[Hobgoblin.name] = Hobgoblin;
