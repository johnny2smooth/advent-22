const input = await Deno.readTextFile("day5/cargo-moves.txt");
// const test = await Deno.readTextFile("day5/test.txt");

// const cargoBoxTest = [["N", "Z"], ["D", "C", "M"], ["P"]];

// const testMoves = test
//   .split(/\n/)
//   .map((input) => input.split(" "))
//   .map((input) =>
//     input
//       .filter((input) => {
//         return !isNaN(+input);
//       })
//       .map((input) => +input)
//   );

// testMoves.forEach((moves) => {
//   const [move, from, to] = moves;
//   cargoBoxTest[to - 1].unshift(
//     ...cargoBoxTest[from - 1].splice(0, move).reverse()
//   );
// });

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

cargoMoves.forEach((moves) => {
  const [move, from, to] = moves;
  cargoBoxes[to - 1].unshift(...cargoBoxes[from - 1].splice(0, move).reverse());
});

const topBoxes = cargoBoxes.map((box) => box[0]);

console.log(topBoxes.join(""));
