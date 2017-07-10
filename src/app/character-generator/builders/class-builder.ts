import { Feats, Levels } from "app/data";
import * as Data from "app/data/";
import * as Classes from "app/data/classes";
import { Armor, ArmorType } from "app/models/equipment";
import { Character } from "app/models/characters/character";
import * as _ from "lodash";

import { BaseCharacterBuilder } from "./base-character-builder";
import { CharacterBuilderConfig } from "./character-builder-config";

export class ClassBuilder extends BaseCharacterBuilder {
    constructor(config: CharacterBuilderConfig) { super(config); }

    build(character: Character): void {
        this.randomizeLevel(character);
        this.randomizeClass(character);
        this.randomizeAbilityImprovements(character);
        this.randomizeHitPoints(character);
        this.randomizeEquipment(character);
        this.applyFeatures(character);
    }

    private randomizeClass(character: Character) {
        if (this.config.class) {
            character.class = this.config.class;
        } else {
            const classNum = this.numGen.rollDie(Classes.ClassList.length) - 1;
            character.class = Classes.ClassList[classNum];
        }

        if (character.level.number >= character.class.archetypeLevel && character.class.archetypes) {
            if (this.config.classArchetype) {
                character.classArchetype = this.config.classArchetype;
            } else {
                const archNum = this.numGen.rollDie(character.class.archetypes.length) - 1;
                character.classArchetype = character.class.archetypes[archNum];
            }
        } else {
            character.classArchetype = null;
        }

        character.savingThrowProficiencies.push(...character.class.savingThrows);

        character.class.armorProficiencies.forEach(op => {
            this.grantProficiencyOption(character.armorProficiencies, op);
        });
        character.class.weaponProficiencies.forEach(op => {
            this.grantProficiencyOption(character.weaponProficiencies, op);
        });
        character.class.skillProficiencies.forEach(op => {
            this.grantProficiencyOption(character.skillProficiencies, op, Data.Skills.SkillList);
        });
        (character.class.toolProficiencies || []).forEach(op => {
            this.grantProficiencyOption(character.toolProficiencies, op);
        });
        (character.class.otherProficiencies || []).forEach(op => {
            this.grantProficiencyOption(character.otherProficiencies, op);
        });
    }

    private randomizeLevel(character: Character) {
        character.level = Levels[this.numGen.numberBetween(this.config.minLevel, this.config.maxLevel)];
    }

    private randomizeAbilityImprovements(character: Character) {
        const improvements = character.class.abilityScoreImprovements.filter(i => i <= character.level.number);
        improvements.forEach(() => {
            if (this.numGen.numberBetween(1, 12) % 3 === 0) {
                this.applyRandomFeature(character);
            } else {
                this.applyAbilityScoreImprovement(character);
            }
        });
    }

    private applyRandomFeature(character: Character) {
        const feats = _.difference(Feats.FeatList, character.features);
        const feat = feats[this.numGen.rollDie(feats.length) - 1];
        character.features.push(feat);
    }

    private applyAbilityScoreImprovement(character: Character) {
        // TODO: This doesn't work because abilities aren't there yet.
        // TODO: Apply ability score improvement.
        const str = (character.baseAbilities.get("STR") || 0) + 2;
        character.baseAbilities.set("STR", str);
        console.log("Set str: " + str);
    }

    private randomizeHitPoints(character: Character) {
        const hitDice = this.numGen.rollDice(character.class.hitDie, character.level.number - 1);
        hitDice.push(character.class.hitDie); // Max roll for first level.
        character.baseHitPoints = _.sum(hitDice);
    }

    private randomizeEquipment(character: Character) {
        if (!character.class.equipment) { return; }
        character.class.equipment.forEach(option => {
            this.grantEquipmentOption(character, option);
        });

        // Equip random shield and armour.
        const equipment = character.getEquipment();
        const shields = equipment.filter(a => a instanceof Armor && a.type === ArmorType.Shield);
        if (shields.length > 0) {
            character.equippedShield = shields[this.numGen.rollDie(shields.length) - 1] as Armor;
        }
        const armor = equipment.filter(a => a instanceof Armor && a.type !== ArmorType.Shield);
        if (armor.length > 0) {
            character.equippedArmor = armor[this.numGen.rollDie(armor.length) - 1] as Armor;
        }
    }

    private applyFeatures(character: Character) {
        if (character.class.features) {
            character.class.features.forEach(feature => {
                if (feature.level <= character.level.number) {
                    this.applyFeature(character, feature);
                }
            });
        }
        if (character.classArchetype && character.classArchetype.features) {
            character.classArchetype.features.forEach(feature => {
                if (feature.level <= character.level.number) {
                    this.applyFeature(character, feature);
                }
            });
        }
    }
};
