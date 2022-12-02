export const answer = "";
const input = await Deno.readTextFile("day2/input.txt");

const encryptedSet = new Map();
const encryptedObj = { A: "Rock", B: "Paper", C: "Scissors", X: "Rock", Y: "Paper", Z: "Scissors" }
encryptedSet.set("A", "Rock")

console.log(encryptedSet.get("A"))



