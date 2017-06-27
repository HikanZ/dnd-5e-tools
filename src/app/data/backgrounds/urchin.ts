import { Skills } from "../../data";
import * as Characters from "../../models/characters";
import { FeatureType } from "../../models/features/feature-type";
import * as Tools from "../tools";
import { BackgroundList } from "./background-list";

export const Urchin: Characters.Background = {
    name: "Urchin",
    reference: { source: "PHB", page: 141, url: "" },
    languages: {},
    skillProficiencies: [{ proficiencies: [Skills.SleightOfHand, Skills.Stealth] }],
    toolProficiencies: [{ proficiencies: [Tools.DisguiseKit, Tools.ThievesTools] }],
    features: [{
        name: "City Secrets",
        type: FeatureType.Passive,
        description: `
            You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you
            are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed
            would normally allow.
        `
    }],
    personalityTraits: [
        "I hide scraps of food and trinkets away in my pockets.",
        "I ask a lot of questions.",
        "I like to squeeze into small places where no one else can help me.",
        "I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.",
        "I eat like a pig and have bad manners.",
        "I think anyone who's nice to me is hiding evil intent.",
        "I don't like to bathe.",
        "I bluntly say what other people are hinting at or hiding.",
    ],
    ideals: [
        "Respect. Ali people, rich ar poor, deserve respect. (Good)",
        "Community. We have to take care of each other, because no one else is going to do it. (Lawful)",
        "Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)",
        "Retribution. The rich need to be shown what life and death are like in the gutters. (Evil)",
        "People. I help the people who help me&mdash;that's what keeps us alive. (Neutral)",
        "Aspiration. I'm going to prove that I'm worthy of a better life.",
    ],
    bonds: [
        "My town or city is my home, and I'll fight to defend it.",
        "I sponsor an orphanage to keep others from enduring what I was forced to endure.",
        "I owe my survival to another urchin who taught me to live on the streets.",
        "I owe a debt I can never repay to the person who took pity on me.",
        "I escaped my life of poverty by robbing an important person, and I'm wanted for it.",
        "No one else should have to endure the hardships I've been through.",
    ],
    flaws: [
        "If I'm outnumbered, I will run away from a fight.",
        "Gold seems like a lot of money to me, and I'll do just about anything for more of it.",
        "I will never fully trust anyone other than myself.",
        "I'd rather kill someone in their sleep then fight fair.",
        "It's not stealing if I need It more than someone else.",
        "People who can't take care of themselves get what they deserve.",
    ]
};

BackgroundList[Urchin.name] = Urchin;
