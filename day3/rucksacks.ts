export let total = 0;

const input = await Deno.readTextFile("day3/input.txt");
const rucksacks = input.split(/\n/);

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const priority = new Map();
(lowercase + uppercase)
  .split("")
  .forEach((letter, i) => priority.set(letter, i + 1));

const mistakes: string[] = [];

rucksacks.forEach((rucksack) => {
  const firstCompartment = rucksack.slice(0, rucksack.length / 2).split("");
  const secondCompartment = rucksack.slice(rucksack.length / 2).split("");
  const unique = new Set();
  let result = "";
  firstCompartment.forEach((item) => unique.add(item));
  secondCompartment.forEach((item) => {
    if (unique.has(item)) {
      result = item;
    }
  });
  mistakes.push(result);
  return result;
});

mistakes.forEach((mistake) => (total += priority.get(mistake)));
