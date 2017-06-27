import * as Data from "app/data/";
import * as Backgrounds from "app/data/backgrounds";
import { ProficiencyType } from "app/models/abilities";
import { Character } from "app/models/characters/character";

import { BaseCharacterBuilder } from "./base-character-builder";
import { CharacterBuilderConfig } from "./character-builder-config";

export class BackgroundBuilder extends BaseCharacterBuilder {
    constructor(config: CharacterBuilderConfig) { super(config); }

    build(character: Character): void {
        this.randomizeAlignment(character);
        this.randomizeBackground(character);
        this.randomizeTraits(character);
        this.randomizeLanguages(character);
    }

    private randomizeAlignment(character: Character) {
        const alignments = Object.keys(Data.Alignments);
        const alignmentNum = this.numGen.rollDie(alignments.length) - 1;
        character.alignment = alignments[alignmentNum];
    }

    private randomizeBackground(character: Character) {
        if (this.config.background) {
            character.background = this.config.background;
        } else {
            const bgKeys = Object.keys(Backgrounds.BackgroundList);
            const bgNum = this.numGen.rollDie(bgKeys.length) - 1;
            character.background = Backgrounds.BackgroundList[bgKeys[bgNum]];
        }

        const bgProficiencies = character.background.skillProficiencies.forEach(skill => {
            character.skillProficiencies.push({
                skill: skill,
                proficiencyType: ProficiencyType.Proficient
            });
        });
    }

    private randomizeTraits(character: Character) {
        const bg = character.background;
        character.personalityTrait = bg.personalityTraits[this.numGen.rollDie(bg.personalityTraits.length) - 1];
        character.ideal = bg.ideals[this.numGen.rollDie(bg.ideals.length) - 1];
        character.bond = bg.bonds[this.numGen.rollDie(bg.bonds.length) - 1];
        character.flaw = bg.flaws[this.numGen.rollDie(bg.flaws.length) - 1];
    }

    randomizeLanguages(character: Character) {
        let otherLanguages = character.background.languages.other || 0;
        if (otherLanguages === 0) { return; }
        while (otherLanguages > 0) {
            this.grantRandomLanguage(character);
            otherLanguages -= 1;
        }
    }
};
