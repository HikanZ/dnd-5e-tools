import * as Names from "app/models/names";
import { NameList } from "./name-list";

/* cSpell:disable */

export const GenasiWater: Names.NameDefinition = new Names.NameDefinition()
Object.assign(GenasiWater, {
    name: "Genasi (Water)",
    formats: [{ name: "Forename", formats: ["{forename}"] }],
    parts: {
        forename: {
            markovOrder: 2,
            mode: "item",
            source: {
                /* Adapted from from: http://www.fantasynamegenerators.com/dnd-genasi-names.php */
                "N": [
                    "agua", "aqua", "azure", "basin", "bath", "bathe", "beck", "blue", "bore", "branch", "brine", "brook", "cleanse",
                    "course", "creek", "current", "dabble", "damp", "deluge", "dew", "dewdrop", "douse", "downpour", "drain", "drench",
                    "drift", "drip", "drizzle", "drop", "droplet", "drown", "eagre", "ebb", "estuary", "expanse", "flood", "flow", "flux",
                    "fog", "fountain", "geyser", "gush", "hose", "hydra", "hydrogen", "influx", "jet", "lagoon", "lake", "lakelet",
                    "liquid", "mere", "mist", "monsoon", "neptune", "ocean", "paddle", "plash", "plunge", "pond", "pool", "precip",
                    "puddle", "quagmire", "rain", "rill", "rinse", "ripple", "river", "rivulet", "run", "runnel", "rush", "sea", "seiche",
                    "shower", "soak", "spatter", "splash", "spout", "spring", "sprinkle", "storm", "stream", "streamlet", "surf", "surge",
                    "swish", "tear", "teardrop", "tempest", "tidal", "tide", "torrent", "tributary", "tsunami", "typhoon", "vapor", "wash",
                    "wave", "well", "wet"
                ]
            },
        }
    }
});

NameList.push(GenasiWater);
