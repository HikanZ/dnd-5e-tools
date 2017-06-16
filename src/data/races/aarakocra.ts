import * as Languages from "../../data/languages";
import { Races } from "./races";

import * as RaceModels from "../../models/races";

const Aarakocra: RaceModels.Race = {
    name: "Aarakocra",
    size: "Medium",
    speed: { walk: 25, fly: 50 },
    height: { base: 54, modifier: 12 },
    weight: { base: 80, modifier: 2 },
    languages: { known: [ Languages.Common, Languages.Aarakocra, Languages.Primordial ] },
    statMods: { dexterity: +2, wisdom: +1 },
    features: [
        {
            name: "Flight", type: "passive",
            description: "You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor."
        }, {
            name: "Talons", type: "active",
            description: "You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit."
        }
    ],
    reference: { source: "EE", page: 2, url: "https://www.dndbeyond.com/characters/races/aarakocra" },
    subraces: null
};

Races[Aarakocra.name] = Aarakocra;
