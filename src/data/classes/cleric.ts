import { Languages, Skills } from "../../data";
import { Classes as ClassesImport } from "./class-list";
import * as ClassModels from "../../models/classes";

namespace Classes {
    export const Cleric: ClassModels.Class = {
        name: "Cleric",
        primaryStat: "WIS",
        reference: { source: "PHB", page: 56, url: "https://www.dndbeyond.com/characters/classes/cleric" },
        archetypes: [
            {
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
    };

    ClassesImport.ClassList[Cleric.name] = Cleric;
};
