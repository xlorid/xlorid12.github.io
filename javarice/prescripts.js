//HEY YOU FOUND THE PRESCRIPTS
//DON'T BE ADDING PRESCRIPTS OR I WILL SEND THE WILL OF THE CITY
//ON YOU ASS
// <!-- ⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣯⢻⣿⣿⣿⣿⣆⠄⠄⠄
// ⠄⠄⣼⢀⣿⣿⣿⣿⣏⡏⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢻⣿⣿⣿⣿⡆⠄⠄
// ⠄⠄⡟⣼⣿⣿⣿⣿⣿⠄⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⣿⣇⢻⣿⣿⣿⣿⠄⠄
// ⠄⢰⠃⣿⣿⠿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠙⠿⣿⣿⣿⣿⣿⠄⢿⣿⣿⣿⡄⠄
// ⠄⢸⢠⣿⣿⣧⡙⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠈⠛⢿⣿⣿⡇⠸⣿⡿⣸⡇⠄
// ⠄⠈⡆⣿⣿⣿⣿⣦⡙⠳⠄⠄⠄⠄⠄⠄⢀⣠⣤⣀⣈⠙⠃⠄⠿⢇⣿⡇⠄
// ⠄⠄⡇⢿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⣠⣶⣿⣿⣿⣿⣿⣿⣷⣆⡀⣼⣿⡇⠄
// ⠄⠄⢹⡘⣿⣿⣿⢿⣷⡀⠄⢀⣴⣾⣟⠉⠉⠉⠉⣽⣿⣿⣿⣿⠇⢹⣿⠃⠄
// ⠄⠄⠄⢷⡘⢿⣿⣎⢻⣷⠰⣿⣿⣿⣿⣦⣀⣀⣴⣿⣿⣿⠟⢫⡾⢸⡟⠄.
// ⠄⠄⠄⠄⠻⣦⡙⠿⣧⠙⢷⠙⠻⠿⢿⡿⠿⠿⠛⠋⠉⠄⠂⠘⠁⠞⠄⠄⠄
// ⠄⠄⠄⠄⠄⠈⠙⠑⣠⣤⣴⡖⠄⠿⣋⣉⣉⡁⠄⢾⣦⠄⠄⠄⠄⠄⠄⠄⠄  -->
const messages = [
  // COMMON (early) //RANDOM BULLLSHITS
  { text: "WHEN CLEAVING THROUGH THE SHOULDER AND THE SKULL WITH A BASTARD SWORD...", weight: 40, minCount: 0, amounts: 2 },
  { text: "WHEN PUNCHING 10 OR MORE  HOLES IN THE TORSO WITH A RAPIER...", weight: 45, minCount: 0, amounts: 2 },
  { text: "WHEN LACERATING THROUGH SPACE ITSELF WITH A SCYTHE, LIKE A CERTAIN SOMEONE...", weight: 35, minCount: 0, amounts: 2 },
  { text: "USE A SKILL THAT REQUIRES THREE LIGHT", weight: 35, minCount: 0, amounts: 2 },
  { text: "USE A SKILL THAT REQUIRES TWO LIGHT", weight: 40, minCount: 0, amounts: 1 },
  { text: "UN-LOCK YOUR BLADE", weight: 40, minCount: 0, amounts: 2 },
  { text: "USE A SKILL WITH AN ODD NUMBER", weight: 45, minCount: 0, amounts: 3 },
  { text: "USE THREE M1 COMBOS WORTH OF M1S", weight: 45, minCount: 0, amounts: 2 },
  { text: "USE YOUR CRIT THREE TIMES, GET ANOTHER PRESCRIPT", weight: 45, minCount: 0, amounts: 2 },
  { text: "ACTIVATE AN ABSOLUTE RESONANCE IN THIRTY SECONDS", weight: 40, minCount: 0, amounts: 3 },
  { text: "USE A SKILL THAT REQUIRES THE MOST LIGHT", weight: 45, minCount: 0, amounts: 3 },
  { text: "DO NOT PARRY FOR THE NEXT TEN SECONDS", weight: 20, minCount: 0, amounts: 3 },
  { text: "LAND A MANG INFUSED ATTACK", weight: 20, minCount: 0, amounts: 3 },

  // UNCOMMON (mid) / NOT REALLY BAD YET
  { text: "MANIFEST AN EGO", weight: 10, minCount: 4, amounts: 2 },
  { text: "START FLEEING FROM A BATTLE, TURN AROUND, SURPRISE THE ENEMY WITH AN ATTACK", weight: 20, minCount: 3, amounts: 3 },
  { text: "DO NOT PARRY BAIT FOR THE NEXT TWENTY SECONDS", weight: 20, minCount: 1, amounts: 4 },
  { text: "USE TWO SKILLS IN SUCCESSION", weight: 10, minCount: 1, amounts: 3 },
  { text: "PARRY BAIT AN OPPONENT IN THE NEXT TWENTY SECONDS", weight: 30, minCount: 2, amounts: 2 },
  { text: "SWAP WEAPONS THREE TIMES IN A ROW", weight: 10, minCount: 2, amounts: 5 },
  { text: "PARRY, EVADE OR BLOCK ATTACKS TEN TIMES IN A ROW. DO NOT COUNTERATTACK.", weight: 10, minCount: 2, amounts: 5 },
  { text: "USE UP ALL YOUR KNOWLEDGE", weight: 10, minCount: 2, amounts: 5 },
  { text: "REPEAT THE LAST PRESCRIPT", weight: 20, minCount: 3, amounts: 5 },
  { text: "LAND YOUR STRONGEST ATTACK FOUR TIMES IN A ROW", weight: 20, minCount: 3, amounts: 5 },
  { text: "USE UP ALL YOUR STRENGTH, LET THE OPPONENT STRIKE YOU", weight: 10, minCount: 4, amounts: 5 },
  { text: "EVADE AN ATTACK FIVE TIMES. DO NOT COUNTERATTACK", weight: 20, minCount: 5, amounts: 5 },
  { text: "LET THE ENEMY GET A COMBO ON YOU, PARRY AFTER HE DAMAGES YOU FOR EXACTLY TWO BARS", weight: 10, minCount: 5, amounts: 5 },
  { text: "ONLY PARRY OR BLOCK FOR THE NEXT TEN SECONDS", weight: 5, minCount: 7, amounts: 1 },
  { text: "DROP AN ORGAN TO YOUR ENEMY", weight: 5, minCount: 7, amounts: 1 },
  { text: "PUT ON A SHOW", weight: 5, minCount: 7, amounts: 1 },
  { text: "GET A BACKSTREET DWELLER TO HELP YOU", weight: 5, minCount: 7, amounts: 1 },
  { text: "START SINGING A SONG", weight: 5, minCount: 7, amounts: 1 },
  { text: "ASK THE ENEMY ABOUT THEIR FAVORITE COLOR. DOESN'T MATTER IF THEY ANSWER OR NOT.", weight: 5, minCount: 7, amounts: 1 },
  { text: "DO NOT USE PAGES FOR TWENTY SECONDS", weight: 10, minCount: 2, amounts: 5 },
  { text: "LOOK STRAIGHT UP FOR FIVE SECONDS", weight: 10, minCount: 2, amounts: 5 },
  { text: "START COUNTING UNTIL YOU REACH ONE HUNDRED OR UNTIL YOU WIN, WHEN THE BATTLE ENDS JUMP ON THEIR BODY BY THE FLOOR BY THE FLOOR OF HALF THE NUMBER YOU COUNTED TO", weight: 10, minCount: 2, amounts: 5 },
  { text: "SWAP WEAPONS THREE TIMES IN A ROW", weight: 10, minCount: 2, amounts: 5 },
  { text: "YOUR LEGS ARE STONE. ALL YOU HAVE ARE YOUR ARMS", weight: 20, minCount: 3, amounts: 5 },
  { text: "PARRY OR BLOCK WHEN YOUR ENEMY IS STUNNED", weight: 20, minCount: 3, amounts: 5 },

 // RARE (late) DIE ALREADY
  { text: "RUN TO THE SEA, LET IT SWALLOW YOU", weight: 20, minCount: 6, amounts: 3 },
  { text: "SPIN ON EACH M1 UNTIL THE END OF BATTLE", weight: 5, minCount: 8, amounts: 3 },
  { text: "KEEP JUMPING UNTIL THE BATTLE ENDS", weight: 10, minCount: 6, amounts: 3 },
  { text: "ONLY USE INDEX RELATED SKILLS UNTIL THE END OF BATTLE", weight: 5, minCount: 9, amounts: 3 },
  { text: "DO NOT USE SKILLS UNTIL THE END OF BATTLE, IGNORE ALL SKILL RELATED PRESCRIPTS", weight: 20, minCount: 6, amounts: 3 },
  { text: "DO NOT USE M1S, RUSH AND FOCUSED STRIKE DOES NOT COUNT", weight: 5, minCount: 6, amounts: 3 },
  { text: "USE A MOVE. DOESN'T MATTER IF THE ENEMY IS NEAR OR NOT.", weight: 30, minCount: 5, amounts: 3 },
  { text: "DO NOT USE SKILLS UNLESS YOU ARE AT MAX SANITY", weight: 10, minCount: 7, amounts: 3 },
  { text: "STACK TEN COUNT OF A NEGATIVE EFFECT ON YOURSELF", weight: 10, minCount: 7, amounts: 3 },

  // VERY RARE / MEMES
  { text: "LARP AS A CERTAIN FIXER FROM A CERTAIN LIBRARY", weight: 5, minCount: 8, amounts: 10 },
  { text: "GO TO THE LIBRARY", weight: 20, minCount: 8, amounts: 10 },
  { text: "ESCAPE COMBAT VIA CLOSING THE GAME", weight: 5, minCount: 3, amounts: 10 },
  { text: "KILL THE NEAREST PERSON TO YOU", weight: 5, minCount: 3, amounts: 1 },
  { text: "Stasik give me a rewound time ~ Yura", weight: 5, minCount: 50, amounts: 1 },
  
];

const recentMessagesSize = 5;
const recentMessages = [];

function pickMessage() {
    const eligible = messages.filter(m => clickCount >= m.minCount && m.amounts > 0);
    if (!eligible.length){
      return null;  
    }
    let picked = null;
    let attempts = 0;
    const MAX_ATTEMPTS = 25;

    while (attempts < MAX_ATTEMPTS) {
        attempts++;

        const totalWeight = eligible.reduce((s, m) => s + m.weight, 0);
        let roll = Math.random() * totalWeight;

        for (const m of eligible) {
            roll -= m.weight;
            if (roll <= 0) {
                picked = m;
                break;
            }
        }

        if (
            picked &&
            picked !== lastMessage &&
            !recentMessages.includes(picked)
        ) {
            break;
        }

        picked = null;
    }

    if (!picked){
      return null;  
    } 
    picked.amounts--;

    if (picked.amounts <= 0) {
        const idx = messages.indexOf(picked);
        if (idx !== -1) {
            messages.splice(idx, 1);
        }
    }

    recentMessages.push(picked);
    if (recentMessages.length > recentMessagesSize) {
        recentMessages.shift();
    }

    lastMessage = picked;
    return picked;
}
