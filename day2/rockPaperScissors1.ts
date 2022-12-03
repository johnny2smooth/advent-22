// const encryptedSet = new Map();
// encryptedSet.set("A", "Rock")
export const answer = "";
const input = await Deno.readTextFile("day2/input.txt");
const cleanInput: string[] = input.replaceAll(" ", "").split(/\n/)

export type rockPaperScissors = "Rock" | "Paper" | "Scissors";

export type ElfEncryption = { A: rockPaperScissors, B: rockPaperScissors, C: rockPaperScissors, X: rockPaperScissors, Y: rockPaperScissors, Z: string }
export type Score = { Rock: number, Paper: number, Scissors: number }

const elfValues: ElfEncryption = { "A": "Rock", "B": "Paper", "C": "Scissors", "X": "Rock", "Y": "Paper", "Z": "Scissors" }
const shapeScore: Score = { "Rock": 1, "Paper": 2, "Scissors": 3 }

// Rock defeats Scissors, 
// Scissors defeats Paper, 
// and Paper defeats Rock.

// increment total score with value of Rock: 1, Paper: 2 or Scissors: 3
// then add the score for the outcome of the round.
// add 0 if you lost, 3 if draw, 6 if win.
let totalScore = 0;

cleanInput.map(([elf, me]: string) => {
  const elfMove = elfValues[elf as keyof ElfEncryption];
  const myMove = elfValues[me as keyof ElfEncryption];
  if (elfMove === myMove) {
    totalScore += 3 + shapeScore[myMove as keyof Score];
  } else if (elfMove === "Paper" && myMove === "Scissors"
    || elfMove === "Scissors" && myMove === "Rock"
    || elfMove === "Rock" && myMove === "Paper") {
    totalScore += 6 + shapeScore[myMove as keyof Score];
  } else {
    totalScore += 0 + shapeScore[myMove as keyof Score];
  }
})

console.log(totalScore)



