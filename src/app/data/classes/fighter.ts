import { Skills } from "app/data";

import * as ClassModels from "../../models/classes";
import { ArmorType } from "../../models/equipment";
import { WeaponList } from "../weapons";
import { ClassList } from "./class-list";

export const Fighter: ClassModels.Class = new ClassModels.Class({
    name: "Fighter",
    primaryStat: "STR",
    hitDie: 10,
    savingThrows: ["STR", "CON"],
    armorProficiencies: [{ proficiencies: [ArmorType.Light, ArmorType.Medium, ArmorType.Heavy, ArmorType.Shield] }],
    weaponProficiencies: [{ proficiencies: WeaponList }],
    toolProficiencies: [],
    skillProficiencies: [{
        proficiencies: [
            Skills.Acrobatics, Skills.AnimalHandling, Skills.Athletics, Skills.History, Skills.Insight, Skills.Intimidation,
            Skills.Perception, Skills.Survival
        ], count: 2
    }],
    otherProficiencies: [],
    archetypeName: { singular: "Martial Archetype", plural: "Martial Archetypes" },
    reference: { source: "PHB", page: 70, url: "https://www.dndbeyond.com/characters/classes/fighter" },
    archetypes: [
        {
            name: "Arcane Archer",
            reference: {
                source: "UA", document: "Fighter", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=2"
            }
        }, {
            name: "Champion",
            reference: {
                source: "PHB", page: 72,
                url: "https://www.dndbeyond.com/characters/classes/fighter#Champion"
            }
        }, {
            name: "Battlemaster",
            reference: {
                source: "PHB", page: 73,
                url: ""
            }
        }, {
            name: "Eldritch Knight",
            reference: {
                source: "PHB", page: 74,
                url: ""
            }
        }, {
            name: "Knight",
            reference: {
                source: "UA", document: "Fighter", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=2"
            }
        }, {
            name: "Samurai",
            reference: {
                source: "UA", document: "Fighter", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=3"
            }
        }, {
            name: "Sharpshooter",
            reference: {
                source: "UA", document: "Fighter", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf#page=3"
            }
        }, {
            name: "Cavalier",
            reference: {
                source: "UA", document: "Kits of Old", page: 3,
                url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page3"
            },
        }, {
            name: "Scout",
            reference: {
                source: "UA", document: "Kits of Old", page: 4,
                url: "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf#page4"
            },
        },
    ]
});

ClassList.push(Fighter);
