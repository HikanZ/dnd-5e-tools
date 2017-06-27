import { Languages } from "../../data/languages";
import { FeatureType } from "../../models/features/feature-type";
import { TimeUnit } from "../../models/features/time-unit";
import * as RaceModels from "../../models/races";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const YuanTiPureblood: RaceModels.Race = {
    name: "Yuan-ti Pureblood",
    size: "Medium",
    senses: { darkvision: 60 },
    age: { maturity: 18, max: 80 },
    height: { base: 56, modifier: 20 },
    weight: { base: 110, modifier: 8 },
    nameDefinition: Names.YuanTi,
    languages: { known: [Languages.Common, Languages.Abyssal, Languages.Draconic] },
    abilityMods: { "CHA": +2, "INT": +1 },
    speed: { walk: 30 },
    features: [
        {
            name: "Innate Spellcasting", type: FeatureType.Active,
            usage: { times: 1, timeUnit: TimeUnit.ShortRest },
            description: `
                    You know the poison spray cantrip. You can cast animal friendship an unlimited number of times with this trait,
                    but you can target only snakes with it. Starting at 3rd level, you can also cast suggestion with this trait. Once
                    you cast it, you can't do so again until you finish a long rest. Charisma is your spellcasting ability for these spells.
                `
        }, {
            name: "Magic Resistance", type: FeatureType.Passive,
            description: "You have advantage on saving throws against spells and other magical effects."
        }, {
            name: "Poison Immunity", type: FeatureType.Passive,
            description: "You are immune to poison damage and the poisoned condition."
        }
    ],
    reference: { source: "VGM", page: 120 },
    subraces: []
}

RaceList[YuanTiPureblood.name] = YuanTiPureblood;
