export const x = "";

const input = await Deno.readTextFile("day1/input.txt");
const lines = input.split(/\n/).map((line) => +line);
let biggest = -Infinity;

let i = 0;

let calories = 0;

let allElves = [];

while (i < lines.length) {
  if (lines[i] === 0) {
    if (calories > biggest) {
      allElves.push(calories);
    }
    calories = 0;
  }
  calories += lines[i]
  i += 1;
}

allElves.sort().slice(allElves.length - 3, allElves.length).reduce((prev, current) => prev + current, 0)
