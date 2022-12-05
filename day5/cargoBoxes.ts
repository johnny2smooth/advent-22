const input = await Deno.readTextFile("day5/cargo-moves.txt");

const cargoBoxes = [
  ["V", "Q", "W", "M", "B", "N", "Z", "C"],
  ["B", "C", "W", "R", "Z", "H"],
  ["J", "R", "Q", "F"],
  ["T", "M", "N", "F", "H", "W", "S", "Z"],
  ["P", "Q", "N", "L", "W", "F", "G"],
  ["W", "P", "L"],
  ["J", "Q", "C", "G", "R", "D", "B", "V"],
  ["W", "B", "N", "Q", "Z"],
  ["J", "T", "G", "C", "F", "L", "H"],
];

const cargoMoves = input
  .split(/\n/)
  .map((input) => input.split(" "))
  .map((input) =>
    input
      .filter((input) => {
        return !isNaN(+input);
      })
      .map((input) => +input)
  );

cargoMoves.slice(0, cargoMoves.length).forEach((moves) => {
  const [move, from, to] = moves;
  cargoBoxes[to - 1].unshift(...cargoBoxes[from - 1].splice(0, move));
});

console.log(cargoBoxes.map((box) => box[0]).join(""));

// let topBoxes = cargoBoxes.map((box) => box[0]);

// console.log(topBoxes[0]);

// console.log(topBoxes.join(""));
