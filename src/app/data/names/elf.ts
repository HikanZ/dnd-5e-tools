import * as Names from "app/models/names";
import { ElfNames } from "./common/elf-names";
import { NameList } from "./name-list";

/* cSpell:disable */

export const Elf: Names.NameDefinition = {
    name: "Elf",
    formats: [
        "{forenamePrefixConsonant}{forenameSuffixVowel} {surname}",
        "{forenamePrefixVowel}{forenameSuffixConsonant} {surname}"
    ],
    parts: {
        forenamePrefixConsonant: ElfNames.forenamePrefixConsonant,
        forenamePrefixVowel: ElfNames.forenamePrefixVowel,
        forenameSuffixVowel: ElfNames.forenameSuffixVowel,
        forenameSuffixConsonant: ElfNames.forenameSuffixConsonant,
        surname: ElfNames.surname
    }
};

NameList[Elf.name] = Elf;
