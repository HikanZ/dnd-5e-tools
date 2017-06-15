import { Component } from "@angular/core";
import { Character } from "../models/character";
import { CharacterGenerator } from "../generators/character-generator";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "D&D 5th Edition NPC Generator";
  generator = new CharacterGenerator();
  character: Character;
  constructor() {
    this.character = this.generator.generateCharacter();
  };

  onGenerateClick() {
    this.character = this.generator.generateCharacter();
  };
};