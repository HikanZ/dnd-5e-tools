import * as Names from "app/models/names";
import { NameList } from "./name-list";

/* cSpell:disable */

/* Adapted from http://www.fantasynamegenerators.com/hp-goblin-names.php */

export const Goblin: Names.NameDefinition = new Names.NameDefinition({
    name: "Goblin",
    formats: [{ name: "Forename", formats: ["{firstSyllable}{secondSyllable}"] }],
    parts: {
        firstSyllable: {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": [
                    "ad", "ag", "al", "ar", "ban", "bar", "bog", "brag", "brod", "brun", "bug", "ear", "eg", "er", "far", "fil", "frad",
                    "fur", "gar", "gor", "grag", "gran", "grin", "gruk", "gug", "gur", "kar", "kog", "krag", "krug", "kur", "lag", "lar",
                    "lug", "lur", "nad", "nag", "nur", "rag", "ran", "rod", "rog", "ug", "ul", "ur"
                ]
            },
        },
        secondSyllable: {
            markovOrder: 2,
            mode: "item",
            source: {
                "N": [
                    "git", "gok", "gor", "gott", "gras", "grat", "grot", "guff", "gus", "guss", "kar", "kit", "knas", "knus", "koff", "kor",
                    "kras", "krat", "krus", "kus", "laff", "last", "lig", "lirg", "lok", "lor", "luff", "luk", "lus", "naff", "nar", "nast",
                    "nok", "not", "nott", "nuff", "nuk", "nus", "raff", "ragg", "rak", "rast", "rat", "rig", "rod"
                ]
            },
        }
    }
});

NameList.push(Goblin);
