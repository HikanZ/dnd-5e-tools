import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Flail: Equipment.Weapon = new Equipment.Weapon();
Object.assign(Flail, {
    name: "Flail",
    type: Equipment.WeaponType.Martial,
    properties: [],
    damageType: Equipment.DamageType.Bludgeoning,
    damageDice: "1d8"
});

WeaponList[Flail.name] = Flail;
