const input = await Deno.readTextFile("day5/cargo-moves.txt");

const cargoBoxes = [
  ["V", "Q", "W", "M", "B", "N", "Z", "C"],
  ["B", "C", "W", "R", "Z", "H"],
  ["J", "R", "Q", "F"],
  ["T", "M", "N", "F", "H", "W", "S", "Z"],
  ["P", "Q", "N", "L", "W", "F", "G"],
  ["W", "P", "L"],
  ["J", "Q", "C", "G", "R", "D", "B", "V"],
  ["J", "T", "G", "C", "F", "L", "H"],
  ["W", "B", "N", "Q", "Z"],
];

const cargoMoves = input
  .split(/\n/)
  .map((input) => input.split(" "))
  .map((input) =>
    input.filter((input) => {
      return !isNaN(+input);
    })
  );

console.log(cargoMoves[0]);
