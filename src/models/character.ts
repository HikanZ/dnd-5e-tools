import { Race, Subrace } from "./race";
import { AbilityScores } from "./ability-scores";
import { Alignment } from "./alignment";
import * as Data from "../data/";

export class Character {
    abilities: AbilityScores = new AbilityScores();
    race: Race = Data.Races[0];
    subrace: Subrace = Data.Races[0].subraces[0];
    alignment: Alignment = "Lawful Good";
};
