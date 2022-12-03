const input = await Deno.readTextFile("day2/input.txt");
const cleanInput: string[] = input.replaceAll(" ", "").split(/\n/);

export type rockPaperScissors =
  | "Rock"
  | "Paper"
  | "Scissors"
  | "Lose"
  | "Draw"
  | "Win";

export type ElfEncryption = {
  A: rockPaperScissors;
  B: rockPaperScissors;
  C: rockPaperScissors;
  X: rockPaperScissors;
  Y: rockPaperScissors;
  Z: string;
};
export type Moves = { Rock: string; Paper: string; Scissors: string };
export type Score = { Rock: number; Paper: number; Scissors: number };

const elfValues: ElfEncryption = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Lose",
  Y: "Draw",
  Z: "Win",
};
const Lose: Moves = { Rock: "Scissors", Paper: "Rock", Scissors: "Paper" };
const Win: Moves = { Rock: "Paper", Paper: "Scissors", Scissors: "Rock" };
const shapeScore: Score = { Rock: 1, Paper: 2, Scissors: 3 };

let totalScore = 0;

cleanInput.map(([elf, me]: string) => {
  const elfMove = elfValues[elf as keyof ElfEncryption];
  const outcome = elfValues[me as keyof ElfEncryption];
  findMyMove(outcome, elfMove);
});

function findMyMove(outcome: string, elfMove: string) {
  let myMove = "";
  if (outcome === "Draw") {
    totalScore += 3 + shapeScore[elfMove as keyof Score];
  } else if (outcome === "Lose") {
    myMove = Lose[elfMove as keyof Moves];
    totalScore += shapeScore[myMove as keyof Score];
  } else {
    myMove = Win[elfMove as keyof Moves];
    totalScore += 6 + shapeScore[myMove as keyof Score];
  }
}

console.log(totalScore);

export const answer = totalScore;
