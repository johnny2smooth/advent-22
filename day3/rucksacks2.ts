export let total = 0;

const input = await Deno.readTextFile("day3/input.txt");
const rucksacks = input.split(/\n/);

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const priority = new Map();
(lowercase + uppercase)
  .split("")
  .forEach((letter, i) => priority.set(letter, i + 1));

const elfGroups = [];

let i = 0;
while (i < rucksacks.length) {
  elfGroups.push([
    rucksacks[i].split(""),
    rucksacks[i + 1].split(""),
    rucksacks[i + 2].split(""),
  ]);
  i += 3;
}

const authLetters = elfGroups.map((group) => {
  const sets = group.map((sack) => {
    const uniqueItems: Set<string> = new Set();
    sack.forEach((letter) => uniqueItems.add(letter));
    return uniqueItems;
  });
  let auth = "";
  sets[0].forEach((letter: string) => {
    if (sets[1].has(letter) && sets[2].has(letter)) {
      auth = letter;
    }
  });
  return auth;
});

const count = authLetters
  .map((letter) => priority.get(letter))
  .reduce((prev, current) => prev + current);

total = count;
