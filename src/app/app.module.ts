import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { JsonpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CodemirrorModule } from "ng2-codemirror";

import { AbilityScoreListComponent } from "../components/ability-score-list/ability-score-list.component";
import { AbilityScoreComponent } from "../components/ability-score/ability-score.component";
import { BackgroundComponent } from "../components/background/background.component";
import { CharacterGeneratorComponent } from "../components/character-generator/character-generator.component";
import { CharacterHeaderComponent } from "../components/character-header/character-header.component";
import { CharacterComponent } from "../components/character/character.component";
import { ExportModalComponent } from "../components/export-modal/export-modal.component";
import { FeatureListComponent } from "../components/feature-list/feature-list.component";
import { FeatureComponent } from "../components/feature/feature.component";
import { GeneratorConfigComponent } from "../components/generator-config/generator-config.component";
import { LanguagesComponent } from "../components/languages/languages.component";
import { SensesComponent } from "../components/senses/senses.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { SkillsComponent } from "../components/skills/skills.component";
import { SourceReferenceComponent } from "../components/source-reference/source-reference.component";
import { SpeedComponent } from "../components/speed/speed.component";
import { StatsComponent } from "../components/stats/stats.component";
import { CollapseDirective } from "../directives/collapse.directive";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    AbilityScoreComponent,
    AbilityScoreListComponent,
    BackgroundComponent,
    CharacterComponent,
    CharacterGeneratorComponent,
    CharacterHeaderComponent,
    ExportModalComponent,
    FeatureComponent,
    FeatureListComponent,
    GeneratorConfigComponent,
    LanguagesComponent,
    SensesComponent,
    SidebarComponent,
    SkillsComponent,
    SourceReferenceComponent,
    SpeedComponent,
    StatsComponent,

    CollapseDirective
  ],
  imports: [
    BrowserModule, CodemirrorModule, FormsModule, ReactiveFormsModule, JsonpModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }