import { Skills } from "app/data";
import * as Packs from "app/data/packs";
import * as Weapons from "app/data/weapons";

import * as ClassModels from "../../models/classes";
import { ClassList } from "./class-list";
import { Item } from "app/models/equipment";

export const Wizard: ClassModels.Class = new ClassModels.Class({
    name: "Wizard",
    primaryAbility: "INT",
    hitDie: 6,
    savingThrows: ["INT", "WIS"],
    armorProficiencies: [],
    weaponProficiencies: [{
        proficiencies: [Weapons.Dagger, Weapons.Dart, Weapons.Sling, Weapons.Quarterstaff, Weapons.LightCrossbow]
    }],
    toolProficiencies: [],
    skillProficiencies: [{
        proficiencies: [
            Skills.Arcana, Skills.History, Skills.Insight, Skills.Investigation, Skills.Medicine, Skills.Religion
        ], count: 2
    }],
    equipment: [
        { items: [Weapons.Quarterstaff, Weapons.Dagger], count: 1 },
        { items: [new Item("component pouch"), new Item("arcane focus")], count: 1 },
        { items: [Packs.ExplorerPack, Packs.ScholarPack], count: 1 },
        { items: [new Item("spellbook")] }
    ],
    otherProficiencies: [],
    archetypeName: { singular: "Arcane Tradition", plural: "Arcane Traditions" },
    reference: { source: "PHB", page: 112, url: "https://www.dndbeyond.com/characters/classes/wizard" },
    archetypes: [
        {
            name: "School of Abjuration",
            reference: {
                source: "PHB", page: 115,
                url: ""
            }
        }, {
            name: "School of Conjuration",
            reference: {
                source: "PHB", page: 116,
                url: ""
            }
        }, {
            name: "School of Divination",
            reference: {
                source: "PHB", page: 116,
                url: ""
            }
        }, {
            name: "School of Enchantment",
            reference: {
                source: "PHB", page: 117,
                url: ""
            }
        }, {
            name: "School of Evocation",
            reference: {
                source: "PHB", page: 117,
                url: "https://www.dndbeyond.com/characters/classes/wizard#SchoolofEvocation"
            }
        }, {
            name: "School of Illusion",
            reference: {
                source: "PHB", page: 118,
                url: ""
            }
        }, {
            name: "School of Necromancy",
            reference: {
                source: "PHB", page: 118,
                url: ""
            }
        }, {
            name: "School of Transmutation",
            reference: {
                source: "PHB", page: 119,
                url: ""
            }
        }, {
            name: "Lore Mastery",
            reference: {
                source: "UA", document: "Warlock & Wizard", page: 5,
                url: "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf#page=5"
            }
        }, {
            name: "Theurgy",
            reference: {
                source: "UA", document: "The Faithful", page: 1,
                url: "https://media.wizards.com/2016/dnd/downloads/UA%20Non-Divine%20Faithful%20SFG.pdf#page=2"
            }
        }, {
            name: "Artificer",
            reference: {
                source: "UA", document: "Eberron", page: 3,
                url: "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf#page=3"
            }
        }
    ]
});

ClassList.push(Wizard);
