import { Languages, Skills } from "../../data";
import { ProficiencyType } from "../../models/abilities/proficiency-type";
import { FeatureType } from "../../models/features/feature-type";
import * as RaceModels from "../../models/races";
import { CommonFeatures } from "../common-features";
import * as Names from "../names";
import { RaceList } from "./race-list";

export const Bugbear: RaceModels.Race = {
    name: "Bugbear",
    size: "Medium",
    speed: { walk: 30 },
    senses: { darkvision: 60 },
    nameDefinition: Names.Goblin,
    age: { maturity: 16, max: 80 },
    height: { base: 72, modifier: 24 },
    weight: { base: 250, modifier: 4 },
    languages: { known: [Languages.Common, Languages.Goblin] },
    abilityMods: { "STR": +2, "DEX": +1 },
    features: [
        {
            name: "Long-Limbed", type: FeatureType.Passive,
            description: "When you make a melee attack on your turn, your reach for it is 5 feet greater than normal."
        },
        CommonFeatures.powerfulBuild,
        {
            name: "Sneaky", type: FeatureType.Passive, skillProficiencies: [Skills.Stealth],
            proficiencyCount: 1, proficiencyType: ProficiencyType.Proficient,
            description: "You are proficient in the Stealth skill."
        }, {
            name: "Surprise Attack", type: FeatureType.Passive,
            description: `
                    If you surprise a creature and hit it with an attack on your first turn in combat, the attack deals an extra 2d6
                    damage to it. You can use this trait only once per combat.
                `
        }
    ],
    reference: { source: "VGM", page: 119 },
    subraces: []
};

RaceList[Bugbear.name] = Bugbear;
