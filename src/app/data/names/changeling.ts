import * as Names from "app/models/names";
import { NameList } from "./name-list";

/* cSpell:disable */

/* Adapted from http://www.fantasynamegenerators.com/dnd-changeling-names.php */

export const Changeling: Names.NameDefinition = new Names.NameDefinition({
    name: "Changeling",
    formats: [{ name: "Forename", formats: ["{name}"] }],
    parts: {
        name: {
            markovOrder: 2,
            mode: "markovOrItem",
            source: {
                "N": [
                    "nirx", "daks", "hits", "vuks", "meec", "yot", "weeg", "mars", "yeac", "tourt", "lag", "suk", "borx", "purx", "iez",
                    "wun", "iek", "wix", "iez", "arx", "wot", "noukt", "baim", "aisk", "veam", "jask", "maits", "vam", "raet", "yirs",
                    "tum", "eaks", "teem", "az", "books", "vouts", "taig", "furt", "vaic", "foc", "mits", "vors", "morx", "pat", "sosk",
                    "visk", "firt", "neec", "larx", "hogs", "burt", "miex", "bak", "niesk", "eats", "nag", "vim", "vies", "eegs", "yaig",
                    "sask", "eart", "mirs", "feas", "lak", "lum", "pan", "lam", "figs", "rom", "hun", "mak", "lic", "housk", "yeert",
                    "aikt", "rars", "hugs", "mat", "neag", "ats", "bask", "veesk", "ieks", "fiek", "vun", "raix", "art", "ut", "lorx",
                    "sigs", "juc", "dok", "parx", "vus", "hirs", "nuz", "fooks", "fairt", "liez"
                ]
            },
        }
    }
});

NameList.push(Changeling);
