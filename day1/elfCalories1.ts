export const x = "";

const input = await Deno.readTextFile("day1/input.txt");
const lines = input.split(/\n/).map((line) => +line);
let biggest = -Infinity;

let i = 0;

let calories = 0;

while (i < lines.length) {
  if (lines[i] === 0) {
    if (calories > biggest) {
      biggest = calories;
    }
    calories = 0;
  }
  calories += lines[i]
  i += 1;
}
