import { Skills } from "app/data";
import * as Armor from "app/data/armor";
import * as Packs from "app/data/packs";
import * as Weapons from "app/data/weapons";

import * as ClassModels from "../../models/classes";
import { ArmorType } from "../../models/equipment";
import { WeaponType } from "../../models/equipment";
import { ClassList } from "./class-list";

export const Cleric: ClassModels.Class = new ClassModels.Class({
    name: "Cleric",
    primaryAbility: "WIS",
    castingAbility: "WIS",
    hitDie: 8,
    savingThrows: ["WIS", "CHA"],
    armorProficiencies: [{ proficiencies: [ArmorType.Light, ArmorType.Medium, ArmorType.Shield] }],
    weaponProficiencies: [{ proficiencies: Weapons.SimpleWeapons }],
    toolProficiencies: [],
    skillProficiencies: [{
        proficiencies: [Skills.History, Skills.Insight, Skills.Medicine, Skills.Persuasion, Skills.Religion],
        count: 2
    }],
    otherProficiencies: [],
    equipment: [
        { items: [Weapons.Mace, Weapons.Warhammer], count: 1 },
        { items: [Armor.ScaleMail, Armor.Leather, Armor.ChainMail], count: 1 },
        { items: [Packs.PriestPack, Packs.ExplorerPack], count: 1 },
        { items: [[Weapons.LightCrossbow, { name: "20 crossbow bolts" }], { items: Weapons.SimpleWeapons, count: 1 }], count: 1 },
        { items: [Armor.Shield, { name: "holy symbol" }] },
    ],
    archetypeName: { singular: "Divine Domain", plural: "Divine Domains" },
    reference: { source: "PHB", page: 56, url: "https://www.dndbeyond.com/characters/classes/cleric" },
    archetypes: [
        {
            name: "Death Domain",
            reference: {
                source: "DMG", page: 96
            }
        }, {
            name: "Forge Domain",
            reference: {
                source: "UA", document: "Cleric", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=1"
            }
        }, {
            name: "Grave Domain",
            reference: {
                source: "UA", document: "Cleric", page: 2,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=2"
            }
        }, {
            name: "Knowledge Domain",
            reference: {
                source: "PHB", page: 59,
                url: ""
            },
        }, {
            name: "Life Domain",
            reference: {
                source: "PHB", page: 60,
                url: "https://www.dndbeyond.com/characters/classes/cleric#LifeDomain"
            },
        }, {
            name: "Light Domain",
            reference: {
                source: "PHB", page: 60,
                url: ""
            },
        }, {
            name: "Nature Domain",
            reference: {
                source: "PHB", page: 61,
                url: ""
            },
        }, {
            name: "Protection Domain",
            reference: {
                source: "UA", document: "Cleric", page: 3,
                url: "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf#page=3"
            }
        }, {
            name: "Tempest Domain",
            reference: {
                source: "PHB", page: 62,
                url: ""
            },
        }, {
            name: "Trickery Domain",
            reference: {
                source: "PHB", page: 62,
                url: ""
            },
        }, {
            name: "War Domain",
            reference: {
                source: "PHB", page: 63,
                url: ""
            },
        },
    ]
});

ClassList.push(Cleric);
