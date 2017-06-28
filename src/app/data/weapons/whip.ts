import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Whip: Equipment.Weapon = new Equipment.Weapon({
    name: "Whip",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Finesse, Equipment.WeaponProperty.Reach],
    damageType: Equipment.DamageType.Slashing,
    damageDice: "1d4"
});

WeaponList.push(Whip);
