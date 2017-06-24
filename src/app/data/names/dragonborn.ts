import * as Names from "app/models/names";
import { DragonSyllables } from "./common/dragon-syllables";
import { NameList } from "./name-list";

/* cSpell:disable */

export const Dragonborn: Names.NameDefinition = {
    name: "Dragonborn",
    formats: [
        "{syllable}{syllable}",
        "{syllable}{syllable}{syllable}",
    ],
    parts: {
        syllable: DragonSyllables.syllable,
    }
};

NameList[Dragonborn.name] = Dragonborn;
